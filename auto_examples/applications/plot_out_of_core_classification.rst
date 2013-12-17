

.. _example_applications_plot_out_of_core_classification.py:


======================================================
Out-of-core classification of text documents
======================================================

This is an example showing how scikit-learn can be used for classification
using an out-of-core approach: learning from data that doesn't fit into main
memory. We make use of an online classifier, i.e., one that supports the
partial_fit method, that will be fed with batches of examples. To guarantee
that the features space remains the same over time we leverage a
HashingVectorizer that will project each example into the same feature space.
This is especially useful in the case of text classification where new
features (words) may appear in each batch.

The dataset used in this example is Reuters-21578 as provided by the UCI ML
repository. It will be automatically downloaded and uncompressed on first run.

The plot represents is the learning curve of the classifier: the evolution
of classification accuracy over the course of the mini-batches. Accuracy is
measured on the first 1000 samples, held out as a validation set.

To limit the memory consumption, we queue examples up to a fixed amount before
feeding them to the learner.



.. rst-class:: horizontal


    *

      .. image:: images/plot_out_of_core_classification_1.png
            :scale: 47

    *

      .. image:: images/plot_out_of_core_classification_2.png
            :scale: 47

    *

      .. image:: images/plot_out_of_core_classification_3.png
            :scale: 47

    *

      .. image:: images/plot_out_of_core_classification_4.png
            :scale: 47


**Script output**::

  Test set is 988 documents (122 positive)
    Passive-Aggressive classifier : 	   469 train docs (    49 positive)    988 test docs (   122 positive) accuracy: 0.879 in 1.13s (  413 docs/s)
            Perceptron classifier : 	   469 train docs (    49 positive)    988 test docs (   122 positive) accuracy: 0.880 in 1.14s (  411 docs/s)
                   SGD classifier : 	   469 train docs (    49 positive)    988 test docs (   122 positive) accuracy: 0.892 in 1.15s (  408 docs/s)
        NB Multinomial classifier : 	   469 train docs (    49 positive)    988 test docs (   122 positive) accuracy: 0.877 in 1.18s (  397 docs/s)
  
  
    Passive-Aggressive classifier : 	  3198 train docs (   340 positive)    988 test docs (   122 positive) accuracy: 0.931 in 3.62s (  882 docs/s)
            Perceptron classifier : 	  3198 train docs (   340 positive)    988 test docs (   122 positive) accuracy: 0.933 in 3.63s (  881 docs/s)
                   SGD classifier : 	  3198 train docs (   340 positive)    988 test docs (   122 positive) accuracy: 0.932 in 3.64s (  879 docs/s)
        NB Multinomial classifier : 	  3198 train docs (   340 positive)    988 test docs (   122 positive) accuracy: 0.880 in 3.67s (  871 docs/s)
  
  
    Passive-Aggressive classifier : 	  6062 train docs (   720 positive)    988 test docs (   122 positive) accuracy: 0.939 in 6.10s (  994 docs/s)
            Perceptron classifier : 	  6062 train docs (   720 positive)    988 test docs (   122 positive) accuracy: 0.915 in 6.10s (  993 docs/s)
                   SGD classifier : 	  6062 train docs (   720 positive)    988 test docs (   122 positive) accuracy: 0.934 in 6.11s (  992 docs/s)
        NB Multinomial classifier : 	  6062 train docs (   720 positive)    988 test docs (   122 positive) accuracy: 0.899 in 6.14s (  986 docs/s)
  
  
    Passive-Aggressive classifier : 	  8920 train docs (  1105 positive)    988 test docs (   122 positive) accuracy: 0.954 in 8.56s ( 1041 docs/s)
            Perceptron classifier : 	  8920 train docs (  1105 positive)    988 test docs (   122 positive) accuracy: 0.942 in 8.57s ( 1040 docs/s)
                   SGD classifier : 	  8920 train docs (  1105 positive)    988 test docs (   122 positive) accuracy: 0.955 in 8.58s ( 1040 docs/s)
        NB Multinomial classifier : 	  8920 train docs (  1105 positive)    988 test docs (   122 positive) accuracy: 0.917 in 8.61s ( 1035 docs/s)
  
  
    Passive-Aggressive classifier : 	 11844 train docs (  1455 positive)    988 test docs (   122 positive) accuracy: 0.956 in 11.10s ( 1067 docs/s)
            Perceptron classifier : 	 11844 train docs (  1455 positive)    988 test docs (   122 positive) accuracy: 0.959 in 11.11s ( 1066 docs/s)
                   SGD classifier : 	 11844 train docs (  1455 positive)    988 test docs (   122 positive) accuracy: 0.945 in 11.11s ( 1065 docs/s)
        NB Multinomial classifier : 	 11844 train docs (  1455 positive)    988 test docs (   122 positive) accuracy: 0.929 in 11.15s ( 1062 docs/s)
  
  
    Passive-Aggressive classifier : 	 14752 train docs (  1799 positive)    988 test docs (   122 positive) accuracy: 0.954 in 13.69s ( 1077 docs/s)
            Perceptron classifier : 	 14752 train docs (  1799 positive)    988 test docs (   122 positive) accuracy: 0.945 in 13.70s ( 1076 docs/s)
                   SGD classifier : 	 14752 train docs (  1799 positive)    988 test docs (   122 positive) accuracy: 0.954 in 13.71s ( 1076 docs/s)
        NB Multinomial classifier : 	 14752 train docs (  1799 positive)    988 test docs (   122 positive) accuracy: 0.935 in 13.74s ( 1073 docs/s)
  
  
    Passive-Aggressive classifier : 	 17685 train docs (  2210 positive)    988 test docs (   122 positive) accuracy: 0.964 in 16.21s ( 1090 docs/s)
            Perceptron classifier : 	 17685 train docs (  2210 positive)    988 test docs (   122 positive) accuracy: 0.956 in 16.22s ( 1090 docs/s)
                   SGD classifier : 	 17685 train docs (  2210 positive)    988 test docs (   122 positive) accuracy: 0.966 in 16.23s ( 1089 docs/s)
        NB Multinomial classifier : 	 17685 train docs (  2210 positive)    988 test docs (   122 positive) accuracy: 0.933 in 16.26s ( 1087 docs/s)



**Python source code:** :download:`plot_out_of_core_classification.py <plot_out_of_core_classification.py>`

.. literalinclude:: plot_out_of_core_classification.py
    :lines: 25-

**Total running time of the example:**  17.84 seconds 
( 0 minutes  17.84 seconds)
    