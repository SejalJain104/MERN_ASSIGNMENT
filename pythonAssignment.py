import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

#Loading the Csv file
def load_data(file_path):
    df = pd.read_csv(file_path)
    return df

#Data Cleaning
def clean_data(df, output_csv):

    print("Our DataFrame=\n",df)
    
    cleaned_df = df.dropna()
    
    cleaned_df.to_csv(output_csv, index=False)
    print(f"Cleaned data has been saved to {output_csv}")

#Data Manipulation
def top_rows_by_columns(df,column_name,threshold,top_n):

    filtered_df = df[df[column_name] > threshold]
    return filtered_df.head(top_n)


#Data Visualization
def plot_age_distribution(df):
    age_counts = df['Age'].value_counts().sort_index()

    plt.figure(figsize=(10,6))
    age_counts.plot(kind='bar',color='skyblue')

    plt.title('Distribution of user Ages',fontsize=16)
    plt.xlabel('Age',fontsize=14)
    plt.ylabel('Number of Users',fontsize=14)

    plt.xticks(rotation=0)
    plt.tight_layout()
    plt.show()

#Descriptive Statistics
def calculate_statistics(df, column_name):
   
    if column_name in df.columns:
        mean_value = np.mean(df[column_name])
        median_value = np.median(df[column_name])
        std_dev_value = np.std(df[column_name])
        
        return mean_value, median_value, std_dev_value
    else:
        print(f"Column '{column_name}' not found in dataset.")
        return None, None, None

if __name__ == "__main__":
    input_file = "D:\MERN Assignment\inputFile.csv"  
    output_file = "D:\MERN Assignment\outputFile.csv"

    data = load_data(input_file)

    clean_data(data, output_file)

    result = top_rows_by_columns(data,'Age',30,5)
    print(result)

    mean, median, std_dev = calculate_statistics(data, 'Age')

    print(f"Mean  : {mean}")
    print(f"Median  : {median}")
    print(f"Standard Deviation : {std_dev}")

    plot_age_distribution(data)

   
