import csv
from datetime import date

# Log your daily followers
followers = int(input("Enter today's follower count: "))
today = date.today()

with open('growth.csv', 'a', newline='') as f:
    writer = csv.writer(f)
    writer.writerow([today, followers])

print(f"Saved! {today} - {followers} followers")
