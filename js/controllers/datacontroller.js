/**
 * Created by jaWeber on 11/19/16.
 */

app.controller('dataCtrl', ['$scope',
    function($scope) {
        $scope.members = [
            {
                "lastname" : "Dawson",
                "firstname" : "Jenny",
                "bdate": "5/5/1987",
                "school" : "St. Elizabeth's School of Nursing",
                "major": "Nursing",
                "graddate": "May 2010"
            },
            {
                "lastname" : "Dawson",
                "firstname" : "Christopher",
                "bdate": "9/28/1990",
                "school" : "Indiana University South Bend",
                "major": "Graphic Design",
                "graddate": "May 2015"
            },
            {
                "lastname" : "Dawson",
                "firstname" : "Melissa",
                "bdate": "6/25/1995",
                "school" : "Ball State University",
                "major": "Social Work",
                "graddate": "May 2017"
            },
            {
                "lastname" : "Glaser",
                "firstname" : "Andrew",
                "bdate": "10/4/1994",
                "school" : "St. Elizabeth's School of Nursing",
                "major": "Business Management",
                "graddate": "May 2017"
            },
            {
                "lastname" : "Glaser",
                "firstname" : "Lizzy",
                "bdate": "12/24/1996",
                "school" : "St. Mary's College",
                "major": "Chemistry (Forensic Science)",
                "graddate": "May 2019"
            },
            {
                "lastname" : "Stutzman",
                "firstname" : "Sarah",
                "bdate": "2/5/1987",
                "school" : "Valparaiso University",
                "major": "Music Education",
                "graddate": "May 2010"
            },
            {
                "lastname" : "Stutzman",
                "firstname" : "Greg",
                "bdate": "8/24/1988",
                "school" : "Valparaiso University",
                "major": "Electrical Engineering",
                "graddate": "May 2011"
            },
            {
                "lastname" : "Stutzman",
                "firstname" : "Adam",
                "bdate": "8/21/1991",
                "school" : "St. Joseph's College",
                "major": "Marketing",
                "graddate": "May 2013"
            },
            {
                "lastname" : "Stutzman",
                "firstname" : "Jacob",
                "bdate": "2/10/1995",
                "school" : "University of St. Francis",
                "major": "Music Technology",
                "graddate": "May 2017"
            },
            {
                "lastname" : "Stutzman",
                "firstname" : "Matt",
                "bdate": "12/6/1997",
                "school" : "Valparaiso University",
                "major": "Electrical Engineering",
                "graddate": "May 2020"
            },
            {
                "lastname" : "Stutzman",
                "firstname" : "Philip",
                "bdate": "7/26/2001",
                "school" : "Elkhart Central HS",
                "major": "",
                "graddate": "May 2017"
            },
            {
                "lastname" : "Weber",
                "firstname" : "Christian",
                "bdate": "3/16/1992",
                "school" : "Roosevelt University",
                "major": "Economics",
                "graddate": "Dec 2013"
            },
            {
                "lastname" : "Weber",
                "firstname" : "Joseph",
                "bdate": "8/9/1993",
                "school" : "Seton Hill University",
                "major": "Physician Assistant Studies (MS)",
                "graddate": "May 2017"
            },
            {
                "lastname" : "Weber",
                "firstname" : "Aaron",
                "bdate": "11/26/1994",
                "school" : "Quincy University",
                "major": "Aviation / Management",
                "graddate": "May 2017"
            },
            {
                "lastname" : "Weber",
                "firstname" : "Hannah",
                "bdate": "3/25/1996",
                "school" : "Lewis University",
                "major": "Nursing",
                "graddate": "May 2018"
            },
            {
                "lastname" : "Weber",
                "firstname" : "Nate",
                "bdate": "12/11/1997",
                "school" : "Valparaiso University",
                "major": "Computer Science",
                "graddate": "May 2020"
            },
            {
                "lastname" : "Weber",
                "firstname" : "Luke",
                "bdate": "8/17/1999",
                "school" : "Cary-Grove High School",
                "major": "",
                "graddate": "May 2017"
            }
        ];
        $scope.sortDate = function(item) {
            var date = new Date(item.bdate);
            return date;
        };

    }]);
