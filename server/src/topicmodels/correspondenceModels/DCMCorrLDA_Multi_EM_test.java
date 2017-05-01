package topicmodels.correspondenceModels;

import structures.*;
import utils.Utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by jetcai1900 on 1/2/17.
 */
public class DCMCorrLDA_Multi_EM_test extends DCMCorrLDA_Multi_EM {
    public double m_ksi;
    public double m_tau;

    public DCMCorrLDA_Multi_EM_test(int number_of_iteration, double converge, double beta,
                                   _Corpus c, double lambda, int number_of_topics,
                                   double alpha, double alphaC, double burnIn, double ksi, double tau,
                                   int lag, int newtonIter, double newtonConverge) {
        super(number_of_iteration, converge, beta, c, lambda, number_of_topics,
                alpha, alphaC, burnIn, lag, ksi, tau, newtonIter,
                newtonConverge);

        m_ksi = ksi;
        m_tau = tau;
    }

    public void printTopWords(int k, String betaFile) {
        double logLikelihood = calculate_log_likelihood();
        System.out.format("final log likelihood %.3f\t", logLikelihood);

        String filePrefix = betaFile.replace("topWords.txt", "");
        debugOutput(k, filePrefix);

        Arrays.fill(m_sstat, 0);

        System.out.println("print top words");

        printTopWordsDistribution(k, filePrefix);

        String alphaFile = betaFile.replace("topWords.txt", "alphas.txt");
        printTopAlphas(alphaFile);

        betaFile = betaFile.replace("topWords.txt", "fullBetas.txt");
        printTopBeta(betaFile);

    }

    protected void debugOutput(int topK, String filePrefix) {
        File parentTopicFolder = new File(filePrefix + "parentTopicAssignment");
        File childTopicFolder = new File(filePrefix + "childTopicAssignment");

        if (!parentTopicFolder.exists()) {
            System.out.println("creating directory" + parentTopicFolder);
            parentTopicFolder.mkdir();
        }

        if (!childTopicFolder.exists()) {
            System.out.println("creating directory" + childTopicFolder);
            childTopicFolder.mkdir();
        }

        File parentWordTopicDistributionFolder = new File(filePrefix
                + "wordTopicDistribution");
        if (!parentWordTopicDistributionFolder.exists()) {
            System.out.println("creating word topic distribution folder\t"
                    + parentWordTopicDistributionFolder);
            parentWordTopicDistributionFolder.mkdir();
        }

        File parentChildTopicDistributionFolder = new File(filePrefix
                + "topicProportion");
        if (!parentChildTopicDistributionFolder.exists()) {
            System.out.println("creating topic distribution folder\t"
                    + parentChildTopicDistributionFolder);
            parentChildTopicDistributionFolder.mkdir();
        }

        for (_Doc d : m_trainSet) {
            if (d instanceof _ParentDoc) {
                printParentTopicAssignment(d, parentTopicFolder);
                printWordTopicDistribution(d,
                        parentWordTopicDistributionFolder, topK);
                printParameter(d, parentChildTopicDistributionFolder);

            } else {
                printChildTopicAssignment(d, childTopicFolder);
            }
        }

        printTopKChild4Stn(filePrefix, topK);
        printTopKChild4Parent(filePrefix, topK);
        printTopStn4ParentByNormLikelihood(filePrefix, topK);
        printTopStn4ParentByMajorTopic(filePrefix, topK);

        int randomNum = 5;
        selectStn(filePrefix, topK, randomNum);

    }

    protected void selectStn(String filePrefix, int topK, int randomNum){
        topK = 5;
        int docSize = m_trainSet.size();
        int[] selectedArray = new int[randomNum];
        for(int i=0; i<randomNum; i++)
            selectedArray[i]=m_rand.nextInt(500);

        System.out.println("printing sentence");
        String sentenceFile = filePrefix+"selectedStn.txt";
        String sentenceIndexFile = filePrefix + "stnIndex.txt";
        try {
            PrintWriter stnOut = new PrintWriter(new File(sentenceFile));
            PrintWriter stnIndexOut = new PrintWriter(new File(sentenceIndexFile));

            for (_Doc d : m_trainSet) {
                if (d instanceof _ParentDoc) {
                    _ParentDoc4DCM pDoc = (_ParentDoc4DCM) d;
                    if(pDoc.getSenetenceSize()<topK){
                        continue;
                    }

                    ArrayList<Integer> mergedStnIndexList = new ArrayList<Integer>();
                    ArrayList<Integer> normLikelihoodStnList = new ArrayList<Integer>();
                    ArrayList<Integer> majorTopicStnList = new ArrayList<Integer>();
                    ArrayList<Integer> parentLikelihoodStnList = new ArrayList<Integer>();

                    estimateTopicProb4Words(pDoc);
                    topStn4ParentByNormLikelihood(pDoc, topK, normLikelihoodStnList, mergedStnIndexList);
                    topStn4ParentByMajorTopic(pDoc, topK, majorTopicStnList, mergedStnIndexList);
                    topStn4ParentByParentLikelihood(pDoc, topK, parentLikelihoodStnList, mergedStnIndexList);

                    stnOut.print(pDoc.getName());
                    for (int stnIndex : mergedStnIndexList) {
                        stnOut.print("\t"+stnIndex);
                    }
                    stnOut.println();

                    stnIndexOut.print(pDoc.getName());
                    stnIndexOut.print("\tnormLikelihood");
                    for (int stnIndex : normLikelihoodStnList) {
                        stnIndexOut.print("\t"+stnIndex);
                    }

                    stnIndexOut.print("\tmajorTopic");
                    for (int stnIndex : majorTopicStnList) {
                        stnIndexOut.print("\t" + stnIndex);
                    }

                    stnIndexOut.print("\tparentLikelihood");
                    for (int stnIndex : parentLikelihoodStnList) {
                        stnIndexOut.print("\t"+stnIndex);
                    }
                    stnIndexOut.println();
                }
            }

            stnIndexOut.flush();
            stnIndexOut.close();

            stnOut.flush();
            stnOut.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    protected void topStn4ParentByNormLikelihood(_ParentDoc4DCM pDoc, int topK, ArrayList<Integer> stnList, ArrayList<Integer> mergedStnList){

        HashMap<Integer, Double> stnNormLikelihoodMap = new HashMap<Integer, Double>();

        for (_Stn stnObj : pDoc.getSentences()) {

            double likelihood = rankStn4ParentByNormLikelihood(stnObj, pDoc);
            likelihood = likelihood/(stnObj.getLength()*1.0);
            stnNormLikelihoodMap.put(stnObj.getIndex(), likelihood);

        }

        List<Map.Entry<Integer, Double>> stnNormLikelihoodList = new ArrayList<Map.Entry<Integer, Double>>(stnNormLikelihoodMap.entrySet());

        Collections.sort(stnNormLikelihoodList, new Comparator<Map.Entry<Integer, Double>>() {
            public int compare(Map.Entry<Integer, Double> o1,
                               Map.Entry<Integer, Double> o2) {
                return (o2.getValue()).toString().compareTo(o1.getValue().toString());
            }
        });

        for(int i=0; i<topK; i++){
            int selectedKey = stnNormLikelihoodList.get(i).getKey();
            stnList.add(selectedKey);
            if(!mergedStnList.contains(selectedKey)){
                mergedStnList.add(selectedKey);
            }
        }

    }

    protected void topStn4ParentByMajorTopic(_ParentDoc4DCM pDoc, int topK, ArrayList<Integer> stnList, ArrayList<Integer> mergedStnList){
        int maxTopicIndex = 0;
        double maxTopicProportion = 0;
        for(int k=0; k<number_of_topics; k++){
            if(pDoc.m_topics[k]>maxTopicProportion) {
                maxTopicIndex = k;
                maxTopicProportion = pDoc.m_topics[k];
            }
        }

        int stnNum = 1;
        for (_Stn stnObj : pDoc.getSentences()) {

            int stnMajorTopic = rankStn4ParentByMajorTopic(stnObj, pDoc);
            if(stnMajorTopic==maxTopicIndex) {
                if(stnNum>topK)
                    break;
                stnList.add(stnObj.getIndex());
                if (!mergedStnList.contains(stnObj.getIndex())) {
                    mergedStnList.add(stnObj.getIndex());
                }
                stnNum += 1;
            }
        }

    }

    protected void topStn4ParentByParentLikelihood(_ParentDoc4DCM pDoc, int topK, ArrayList<Integer> stnList, ArrayList<Integer> mergedStnList){
        HashMap<Integer, Double> stnParentLikelihoodMap = new HashMap<Integer, Double>();

        for (_Stn stnObj : pDoc.getSentences()) {

            double likelihood = rankStn4ParentByParentLikelihood(stnObj, pDoc);
            stnParentLikelihoodMap.put(stnObj.getIndex(), likelihood);

        }

        List<Map.Entry<Integer, Double>> stnParentLikelihoodList = new ArrayList<Map.Entry<Integer, Double>>(stnParentLikelihoodMap.entrySet());

        Collections.sort(stnParentLikelihoodList, new Comparator<Map.Entry<Integer, Double>>() {
            public int compare(Map.Entry<Integer, Double> o1,
                               Map.Entry<Integer, Double> o2) {
                return (o2.getValue()).toString().compareTo(o1.getValue().toString());
            }
        });

        for(int i=0; i<topK; i++){
            int selectedKey = stnParentLikelihoodList.get(i).getKey();
            stnList.add(selectedKey);
            if(!mergedStnList.contains(selectedKey)){
                mergedStnList.add(selectedKey);
            }
        }
    }

    protected void printParentTopicAssignment(_Doc d, File topicFolder) {
        _ParentDoc4DCM pDoc= (_ParentDoc4DCM)d;
        String topicAssignmentFile = pDoc.getName() + ".txt";
        try {
            PrintWriter pw = new PrintWriter(new File(topicFolder,
                    topicAssignmentFile));

            for (_Word w : pDoc.getWords()) {
                int index = w.getIndex();
                int topic = w.getTopic();

                String featureName = m_corpus.getFeature(index);
                pw.print(featureName + ":" + topic + "\t");
            }

            pw.flush();
            pw.close();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    protected void printChildTopicAssignment(_Doc d, File topicFolder) {
        String topicAssignmentFile = d.getName() + ".txt";

        try {
            PrintWriter pw = new PrintWriter(new File(topicFolder,
                    topicAssignmentFile));

            for (_Word w : d.getWords()) {
                int index = w.getIndex();
                int topic = w.getTopic();

                String featureName = m_corpus.getFeature(index);
                pw.print(featureName + ":" + topic + "\t");
            }

            pw.flush();
            pw.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }


    protected void printParameter(_Doc d, File parentChildTopicDistributionFolder) {
        System.out.println("printing parameter");
        String topicDistributionFile = d.getName() + ".txt";

        try {

            PrintWriter pw = new PrintWriter(new File(
                    parentChildTopicDistributionFolder, topicDistributionFile));

            if (d instanceof _ParentDoc) {
                pw.print(d.getName() + "\t");
                pw.print("topicProportion\t");
                for (int k = 0; k < number_of_topics; k++) {
                    pw.print(d.m_topics[k] + "\t");
                }

                pw.println();

                for (_ChildDoc cDoc : ((_ParentDoc) d).m_childDocs){
                    pw.print(cDoc.getName()+"\t");
                    pw.print("topicProportion\t");
                    for (int k = 0; k < number_of_topics; k++) {
                        pw.print(cDoc.m_topics[k] + "\t");
                    }
                    pw.println();
                }
            }

            pw.flush();
            pw.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void printTopKChild4Parent(String filePrefix, int topK) {
        String topKChild4StnFile = filePrefix + "topChild4Parent.txt";
        try {
            PrintWriter pw = new PrintWriter(new File(topKChild4StnFile));

            for (_Doc d : m_trainSet) {
                if (d instanceof _ParentDoc) {
                    _ParentDoc pDoc = (_ParentDoc) d;

                    pw.print(pDoc.getName() + "\t");

                    for (_ChildDoc cDoc : pDoc.m_childDocs) {
                        double docScore = rankChild4ParentBySim(cDoc, pDoc);

                        pw.print(cDoc.getName() + ":" + docScore + "\t");

                    }

                    pw.println();
                }
            }
            pw.flush();
            pw.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected double rankChild4ParentBySim(_ChildDoc cDoc, _ParentDoc pDoc) {
        double childSim = Utils.cosine(cDoc.m_topics, pDoc.m_topics);

        return childSim;
    }

    protected void printWordTopicDistribution(_Doc d,
                                              File wordTopicDistributionFolder, int k) {
        _ParentDoc4DCM pDoc = (_ParentDoc4DCM) d;

        String wordTopicDistributionFile = pDoc.getName() + ".txt";
        try {
            PrintWriter pw = new PrintWriter(new File(
                    wordTopicDistributionFolder, wordTopicDistributionFile));

            for (int i = 0; i < number_of_topics; i++) {
                MyPriorityQueue<_RankItem> fVector = new MyPriorityQueue<_RankItem>(
                        k);
                for (int v = 0; v < vocabulary_size; v++) {
                    String featureName = m_corpus.getFeature(v);
                    double wordProb = pDoc.m_wordTopic_prob[i][v];

                    _RankItem ri = new _RankItem(featureName, wordProb);
                    fVector.add(ri);
                }

                pw.format("Topic %d(%.5f):\t", i, pDoc.m_topics[i]);
                for (_RankItem it : fVector)
                    pw.format("%s(%.5f)\t", it.m_name,
                            m_logSpace ? Math.exp(it.m_value) : it.m_value);
                pw.write("\n");

            }

            pw.flush();
            pw.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    protected void printTopKChild4Stn(String filePrefix, int topK) {
        String topKChild4StnByCombinatorialFile = filePrefix + "topChild4Stn_CCTM_LM.txt";
        String topKChild4StnByLanguageModelFile = filePrefix + "topChild4Stn_LM.txt";
        String topKChild4StnByCCTMFile = filePrefix + "topChild4Stn_CCTM.txt";

        try {
            PrintWriter CCTMLMPW = new PrintWriter(new File(topKChild4StnByCombinatorialFile));

            for (_Doc d : m_trainSet) {

                if (d instanceof _ParentDoc4DCM) {
                    _ParentDoc4DCM pDoc = (_ParentDoc4DCM) d;

                    CCTMLMPW.println(pDoc.getName() + "\t" + pDoc.getSenetenceSize());

                    for (_Stn stnObj : pDoc.getSentences()) {

                        HashMap<String, Double> likelihoodMap = rankChild4StnByCombinatorialLikelihood(stnObj, pDoc);

                        CCTMLMPW.print((stnObj.getIndex() + 1) + "\t");
                        for (String e : likelihoodMap.keySet()) {
                            CCTMLMPW.print(e);
                            CCTMLMPW.print(":" + likelihoodMap.get(e));
                            CCTMLMPW.print("\t");
                        }
                        CCTMLMPW.println();
                    }
                }
            }
            CCTMLMPW.flush();
            CCTMLMPW.close();

            PrintWriter LMPW = new PrintWriter(new File(topKChild4StnByLanguageModelFile));
            for (_Doc d : m_trainSet) {

                if (d instanceof _ParentDoc4DCM) {
                    _ParentDoc4DCM pDoc = (_ParentDoc4DCM) d;

                    LMPW.println(pDoc.getName() + "\t" + pDoc.getSenetenceSize());

                    for (_Stn stnObj : pDoc.getSentences()) {

                        HashMap<String, Double> likelihoodMap = rankChild4StnByLM(stnObj, pDoc);

                        LMPW.print((stnObj.getIndex() + 1) + "\t");
                        for (String e : likelihoodMap.keySet()) {
                            LMPW.print(e);
                            LMPW.print(":" + likelihoodMap.get(e));
                            LMPW.print("\t");
                        }
                        LMPW.println();
                    }
                }
            }
            LMPW.flush();
            LMPW.close();

            PrintWriter CCTMPW = new PrintWriter(new File(topKChild4StnByCCTMFile));
            for (_Doc d : m_trainSet) {

                if (d instanceof _ParentDoc4DCM) {
                    _ParentDoc4DCM pDoc = (_ParentDoc4DCM) d;

                    CCTMPW.println(pDoc.getName() + "\t" + pDoc.getSenetenceSize());

                    for (_Stn stnObj : pDoc.getSentences()) {
                        HashMap<String, Double> likelihoodMap = rankChild4StnByLikelihood(stnObj, pDoc);

                        CCTMPW.print((stnObj.getIndex() + 1) + "\t");
                        for (String e : likelihoodMap.keySet()) {
                            CCTMPW.print(e);
                            CCTMPW.print(":" + likelihoodMap.get(e));
                            CCTMPW.print("\t");
                        }
                        CCTMPW.println();
                    }
                }
            }
            CCTMPW.flush();
            CCTMPW.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected HashMap<String, Double> rankChild4StnByCombinatorialLikelihood(_Stn stnObj, _ParentDoc4DCM pDoc){
        HashMap<String, Double> likelihoodMap = new HashMap<String, Double>();

        for(_ChildDoc cDoc: pDoc.m_childDocs){
            double stnLogLikelihood = 0;

            double part1 = 0;
            double part2 = 0;
            double part3 = 0;

            HashMap<Integer, Double> wordNumMap = new HashMap<Integer, Double>();
            for(_Word w:cDoc.getWords()){
                int wid = w.getIndex();
                if(wordNumMap.containsKey(wid))
                    wordNumMap.put(wid, wordNumMap.get(wid)+1);
                else
                    wordNumMap.put(wid, 1.0);
            }

            for(_Word w:stnObj.getWords()) {
                int wid = w.getIndex();

                String wFeature = m_corpus.getFeature(wid);
                double wordNumInCMNT = 0;
                if(wordNumMap.containsKey(wid))
                    wordNumInCMNT = wordNumMap.get(wid);

                part1 = wordNumInCMNT / (cDoc.getTotalDocLength() + m_ksi);
                part2 = (m_ksi * m_corpus.m_featureStat.get(wFeature).getTTF()[0]) / (m_corpus.getTotalWords() * (m_ksi + cDoc.getTotalDocLength()));
                double wordLikelihood = 0;
                for (int k = 0; k < number_of_topics; k++) {
                    wordLikelihood += cDoc.m_topics[k] * pDoc.m_wordTopic_prob[k][wid];
                }

                part3 = wordLikelihood;

                stnLogLikelihood += Math.log(m_tau * (part1 + part2) + (1 - m_tau) * (part3));
            }

            likelihoodMap.put(cDoc.getName(), stnLogLikelihood);
        }
        return likelihoodMap;
    }

    protected HashMap<String, Double> rankChild4StnByLM(_Stn stnObj, _ParentDoc4DCM pDoc){
        HashMap<String, Double> likelihoodMap = new HashMap<String, Double>();

        for(_ChildDoc cDoc: pDoc.m_childDocs){
            double stnLogLikelihood = 0;

            double part1 = 0;
            double part2 = 0;

            HashMap<Integer, Double> wordNumMap = new HashMap<Integer, Double>();
            for(_Word w:cDoc.getWords()){
                int wid = w.getIndex();
                if(wordNumMap.containsKey(wid))
                    wordNumMap.put(wid, wordNumMap.get(wid)+1);
                else
                    wordNumMap.put(wid, 1.0);
            }

            for(_Word w:stnObj.getWords()) {
                int wid = w.getIndex();

                String wFeature = m_corpus.getFeature(wid);
                double wordNumInCMNT = 0;
                if(wordNumMap.containsKey(wid))
                    wordNumInCMNT = wordNumMap.get(wid);

                part1 = wordNumInCMNT / (cDoc.getTotalDocLength() + m_ksi);
                part2 = (m_ksi * m_corpus.m_featureStat.get(wFeature).getTTF()[0]) / (m_corpus.getTotalWords() * (m_ksi + cDoc.getTotalDocLength()));

                stnLogLikelihood += Math.log(part1 + part2);
            }

            likelihoodMap.put(cDoc.getName(), stnLogLikelihood);
        }
        return likelihoodMap;
    }

    protected HashMap<String, Double> rankChild4StnByLikelihood(_Stn stnObj,
                                                                _ParentDoc4DCM pDoc) {
        HashMap<String, Double> likelihoodMap = new HashMap<String, Double>();

        for (_ChildDoc cDoc : pDoc.m_childDocs) {
            double stnLogLikelihood = 0;
            for (_Word w : stnObj.getWords()) {
                double wordLikelihood = 0;
                int wid = w.getIndex();

                for (int k = 0; k < number_of_topics; k++) {
                    wordLikelihood += cDoc.m_topics[k] *pDoc.m_wordTopic_prob[k][wid];
                }

                stnLogLikelihood += Math.log(wordLikelihood);
            }
            likelihoodMap.put(cDoc.getName(), stnLogLikelihood);
        }

        return likelihoodMap;
    }

    protected void printTopWordsDistribution(int topK, String filePrefix) {
        String topWordFile = filePrefix + "topWords.txt";

        Arrays.fill(m_sstat, 0);

        System.out.println("print top words");
        for (_Doc d : m_trainSet) {
            for (int i = 0; i < number_of_topics; i++)
                m_sstat[i] += m_logSpace ? Math.exp(d.m_topics[i])
                        : d.m_topics[i];
        }

        Utils.L1Normalization(m_sstat);

        try {
            System.out.println("top word file");
            PrintWriter betaOut = new PrintWriter(new File(topWordFile));
            for (int i = 0; i < m_topic_word_prob.length; i++) {
                MyPriorityQueue<_RankItem> fVector = new MyPriorityQueue<_RankItem>(
                        topK);
                for (int j = 0; j < vocabulary_size; j++)
                    fVector.add(new _RankItem(m_corpus.getFeature(j),
                            m_topic_word_prob[i][j]));

                betaOut.format("Topic %d(%.3f):\t", i, m_sstat[i]);
                for (_RankItem it : fVector) {
                    betaOut.format("%s(%.3f)\t", it.m_name,
                            m_logSpace ? Math.exp(it.m_value) : it.m_value);
                    System.out.format("%s(%.3f)\t", it.m_name,
                            m_logSpace ? Math.exp(it.m_value) : it.m_value);
                }
                betaOut.println();
                System.out.println();
            }

            betaOut.flush();
            betaOut.close();
        } catch (Exception ex) {
            System.err.print("File Not Found");
        }
    }

    protected void printTopBeta(String betaFile) {
        try {
            PrintWriter pw = new PrintWriter(new File(betaFile));

            for (int k = 0; k < number_of_topics; k++) {
                pw.print(k + "\t");
                for (int v = 0; v < vocabulary_size; v++) {
                    pw.print(m_corpus.getFeature(v) + ":"
                            + m_beta[k][v] + "\t");
                }
                pw.println();
            }

            pw.flush();
            pw.close();
        } catch (Exception ex) {
            System.err.print("File Not Found");
        }
    }

    protected void printTopAlphas(String alphaFile) {
        try {
            PrintWriter pw = new PrintWriter(new File(alphaFile));

            pw.print("alpha\t");
            for (int k = 0; k < number_of_topics; k++) {
                pw.print(m_alpha[k]+"\t");
            }
            pw.println();

            pw.print("alpha_c\t");
            for (int k = 0; k < number_of_topics; k++) {
                pw.print(m_alpha_c[k]+"\t");
            }
            pw.println();

            pw.flush();
            pw.close();
        } catch (Exception ex) {
            System.err.print("File Not Found");
        }
    }

    // the ranking is based on likelihood
    protected void printTopStn4ParentByNormLikelihood(String filePrefix, int topK){
        String topKChild4StnFile = filePrefix + "topStn4Parent_normStnlikelihood.txt";
        try {
            PrintWriter pw = new PrintWriter(new File(topKChild4StnFile));

            for (_Doc d : m_trainSet) {

                if (d instanceof _ParentDoc4DCM) {
                    _ParentDoc4DCM pDoc = (_ParentDoc4DCM) d;

                    pw.println(pDoc.getName() + "\t" + pDoc.getSenetenceSize()+"\t");

                    for (_Stn stnObj : pDoc.getSentences()) {
                        double likelihood = rankStn4ParentByNormLikelihood(stnObj, pDoc);
                        likelihood = likelihood/(stnObj.getLength()*1.0);
                        pw.print((stnObj.getIndex() + 1));
                        pw.print(":" + likelihood);
                        pw.print("\t");

                    }
                    pw.println();

                }
            }
            pw.flush();
            pw.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected double rankStn4ParentByNormLikelihood(_Stn stnObj,
                                                                _ParentDoc4DCM pDoc) {
        double stnLogLikelihood = 0;
        for (_Word w : stnObj.getWords()) {
            double wordLikelihood = 0;
            int wid = w.getIndex();

            for (int k = 0; k < number_of_topics; k++) {
                wordLikelihood += pDoc.m_topics[k] *pDoc.m_wordTopic_prob[k][wid];
            }

            stnLogLikelihood += Math.log(wordLikelihood);
        }

        return stnLogLikelihood;
    }

    // the ranking is based on major topic
    protected void printTopStn4ParentByMajorTopic(String filePrefix, int topK){
        String topKChild4StnByMajorTopicFile = filePrefix + "topStn4Parent_majorTopic.txt";
        String topKChild4StnFile = filePrefix + "topStn4Parent_parentLikelihood.txt";
        try {
            PrintWriter pwByMajor = new PrintWriter(new File(topKChild4StnByMajorTopicFile));
            PrintWriter pw = new PrintWriter(new File(topKChild4StnFile));

            for (_Doc d : m_trainSet) {

                if (d instanceof _ParentDoc4DCM) {
                    _ParentDoc4DCM pDoc = (_ParentDoc4DCM) d;

                    pwByMajor.println(pDoc.getName() + ":" + pDoc.getSenetenceSize()+"\t");
                    pw.println(pDoc.getName()+":"+pDoc.getSenetenceSize()+"\t");

                    for(int k=0; k<number_of_topics; k++){
                        pwByMajor.print(pDoc.m_topics[k]+"\t");
                        pw.print(pDoc.m_topics[k]+"\t");
                    }

                    estimateTopicProb4Words(pDoc);

                    for (_Stn stnObj : pDoc.getSentences()) {
                        int majorTopicIndex = rankStn4ParentByMajorTopic(stnObj, pDoc);

                        pwByMajor.print((stnObj.getIndex() + 1));
                        pwByMajor.print(":" + majorTopicIndex);
                        pwByMajor.print("\t");

                        double likelihood = rankStn4ParentByParentLikelihood(stnObj, pDoc);
                        pw.print((stnObj.getIndex() + 1));
                        pw.print(":"+likelihood);
                        pw.print("\t");
                    }
                    pwByMajor.println();
                    pw.println();

                }
            }
            pwByMajor.flush();
            pwByMajor.close();
            pw.flush();
            pw.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected int rankStn4ParentByMajorTopic(_Stn stnObj,
                                                    _ParentDoc4DCM pDoc) {

        int[] topicNumArray = new int[number_of_topics];
        Arrays.fill(topicNumArray, 0);
        int maxTopicIndex = 0;
        double maxTopicRatio = 0;
        for (_Word w : stnObj.getWords()) {
            int wid = w.getIndex();
            int sparseWid = pDoc.m_word2Index.get(wid);
            for(int k=0; k<number_of_topics; k++) {
                topicNumArray[k] += pDoc.m_phi[sparseWid][k];
                if(maxTopicRatio<topicNumArray[k]) {
                    maxTopicIndex = k;
                    maxTopicRatio = topicNumArray[k];
                }
            }
        }

        return maxTopicIndex;

    }

    protected void estimateTopicProb4Words(_ParentDoc4DCM pDoc){
        int uniqueWordsNum = pDoc.getSparse().length;
        for(int i=0; i<uniqueWordsNum; i++){
            Arrays.fill(pDoc.m_phi[i], 0);
        }

        for(_Word w: pDoc.getWords()){
            int tid = w.getTopic();
            int wid = w.getIndex();
            int sparseWid = pDoc.m_word2Index.get(wid);
            pDoc.m_phi[sparseWid][tid] ++;
        }

        for(int i=0; i<uniqueWordsNum; i++){
            double phiSum = 0;
            phiSum = Utils.sumOfArray(pDoc.m_phi[i]);
            for(int k=0; k<number_of_topics; k++){
                pDoc.m_phi[i][k] /= phiSum;
            }
        }
    }

    protected double rankStn4ParentByParentLikelihood(_Stn stnObj,
                                             _ParentDoc4DCM pDoc) {

        double parentLikelihood = 0;

        double[] topicProportion = new double[number_of_topics];
        Arrays.fill(topicProportion, 0);
        for (_Word w : stnObj.getWords()) {
            int wid = w.getIndex();
            int sparseWid = pDoc.m_word2Index.get(wid);
            for(int k=0; k<number_of_topics; k++) {
                topicProportion[k] += pDoc.m_phi[sparseWid][k];
            }
        }

        Utils.L1Normalization(topicProportion);

        for(_Word w:pDoc.getWords()){
            int wid = w.getIndex();

            double wordLikelihood = 0;
            for(int k=0; k<number_of_topics; k++){
                wordLikelihood += topicProportion[k]*pDoc.m_wordTopic_prob[k][wid];
            }
            parentLikelihood += Math.log(wordLikelihood);
        }

        return parentLikelihood;
    }


}
