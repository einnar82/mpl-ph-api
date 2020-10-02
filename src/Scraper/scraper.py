import requests
from bs4 import BeautifulSoup
def scraper(url):
    link = requests.get(url,timeout = 5 )
    soup = BeautifulSoup(link.content, 'html.parser')
    results = soup.find(id = "team")
#results.find_all('row', class_='row')
#print(results)
    elems = results.find_all(class_="row rank-body")
    for elem in elems:
        team_rank = elem.find(class_ = "col-xs-2 rank-no")
        team_names = elem.find(class_= "col-xs-7 rank-name")
        team_points = elem.find(class_="col-xs-3 center")
        if None in (team_rank, team_names , team_points):
            continue

        print(team_rank.text.strip(), team_names.text.strip(), (team_points.text.strip()))

scraper(url = "https://ph-mpl.com/en/data")
