# Sentiment Classification for Social Media Texts

This project aims to develop an application that can classify sentiments expressed in text sources associated with a user on social media platforms such as Facebook, Instagram, and Twitter. The application categorizes the text into five predefined categories: Education, Crime, Transport, Health, and Hygiene. Additionally, it predicts whether the sentiment expressed in the text is positive, negative, or neutral within the corresponding category.

## Solution Overview

To address the problem statement, we have implemented two models: one for classifying the text into the five categories and another for sentiment analysis within each category.

### Model 1: BERT Model

We employed the BERT (Bidirectional Encoder Representations from Transformers) model, which is a state-of-the-art natural language processing model. BERT has demonstrated exceptional performance across various NLP tasks, including question answering, natural language inference, and more.

### Model 2: DistilBERT Model

The DistilBERT model is a smaller and faster version of BERT, designed for efficiency without significant loss of performance. We chose DistilBERT as our second model for sentiment analysis, leveraging its benefits in terms of computational resources and speed.

## Training Data

For each model, we utilized different datasets to ensure accurate classification and sentiment analysis.

### Model 1: Classification Dataset

To train the BERT model for classification, we employed the Appify Web Scrapping Tool to scrape data from Instagram and Twitter. We collected approximately 2000 reviews and comments for each of the five categories. After preprocessing the data, we created a final CSV dataset.

- Dataset Source: Instagram and Twitter using Appify Web Scrapping Tool
- Dataset Size: Approximately 2000 reviews and comments per category
- Preprocessing: Data preprocessing techniques were applied
- Accuracy: 94%

### Model 2: Sentiment Analysis Datasets

For training the DistilBERT model, we used two datasets: a multilingual sentiments dataset available in the Hugging Face library and an English sentiments dataset from Kaggle. Appropriate preprocessing was performed to merge these datasets.

- Dataset Sources: 
  - Multilingual Sentiments: Hugging Face library
  - English Sentiments: Kaggle
- Preprocessing: Merging and preprocessing techniques were applied
- Accuracy: 82%

## Examples of Predicted Categories and Sentiments

The models were able to predict the categories and sentiments of various text inputs. Here are some examples:

1. Text: "Our education system is outdated."
   - Predicted Category: Education
   - Sentiment: Negative

2. Text: "I love how accessible public transportation has become."
   - Predicted Category: Transport
   - Sentiment: Positive

3. Text: "The healthcare facilities in this area are inadequate."
   - Predicted Category: Health
   - Sentiment: Negative

4. Text: "Cleanliness is a major concern in our neighborhood."
   - Predicted Category: Hygiene
   - Sentiment: Negative

5. Text: "I witnessed a robbery yesterday, and it was terrifying."
   - Predicted Category: Crime
   - Sentiment: Negative

Please note that these examples are for illustrative purposes and showcase the capability of the models in accurately predicting the categories and sentiments associated with the provided texts.

For detailed information on the model implementation, training, and usage instructions, please refer to the documentation provided in the project repository.

**Note:** The accuracy figures mentioned above are based on the performance of the models during the training phase and may vary in real-world scenarios.
