# import logging
# from flask import Flask, request, render_template
# import pypyodbc as odbc

# app = Flask(__name__)

# # Configure logging
# logging.basicConfig(filename='app.log', level=logging.ERROR, format='%(asctime)s - %(levelname)s - %(message)s')

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     conn = None  # Define the 'conn' variable here

#     if request.method == 'POST':
#         try:
#             # Database connection setup
#             DRIVER = 'SQL Server'
#             SERVER_NAME = 'JANA'  # Replace with your server name or IP address
#             DATABASE_NAME = 'final'

#             conn_string = f"""
#                 Driver={{{DRIVER}}};
#                 Server={SERVER_NAME};
#                 Database={DATABASE_NAME};
#                 Trust_Connection=yes;
#             """
            
#             conn = odbc.connect(conn_string)
#             cursor = conn.cursor()

#             # Your code for getting form values and database insertion here
            
#             insert_statement = """
#                 INSERT INTO dbo.final3 ([firstname]
#       ,[lastname]
#       ,[initial]
#       ,[number]
#       ,[checkbox]
#       ,[gender]
#       ,[country]
#       ,[dateofbirth])
#                 VALUES (?,?,?,?,?,?,?,?)
#             """

#             # Replace the placeholders below with actual form data
#             cursor.execute(insert_statement, (request.form['fname'],request.form['lname'],request.form['initial'],request.form['number'],request.form.get('subscribe'),request.form.get('gender'),request.form.get('country'),request.form.get('date_of_birth')))

#             # Commit the transaction and close the connection
#             conn.commit()
#             cursor.close()
#             conn.close()
#             return 'Data inserted successfully'
#         except odbc.Error as e:
#             # Rollback the transaction in case of an error
#             cursor.rollback()

#             # Log the error
#             logging.error(f'Database error: {str(e)}')

#             # Return an error message to the user
#             return 'Error inserting data. Please check the logs for details.'

#     return render_template('project1.html')

# if __name__ == '__main__':
#     app.run(debug=True)


import logging
from flask import Flask, request, render_template, redirect, flash
import pypyodbc as odbc

app = Flask(__name__)
app.secret_key = '73772113146'

# Configure logging
logging.basicConfig(filename='app.log', level=logging.ERROR, format='%(asctime)s - %(levelname)s - %(message)s')

@app.route('/', methods=['GET', 'POST'])
def index():
    conn = None  # Define the 'conn' variable here

    if request.method == 'POST':
        try:
            # Database connection setup
            DRIVER = 'SQL Server'
            SERVER_NAME = 'JANA'  # Replace with your server name or IP address
            DATABASE_NAME = 'final'

            conn_string = f"""
                Driver={{{DRIVER}}};
                Server={SERVER_NAME};
                Database={DATABASE_NAME};
                Trust_Connection=yes;
            """
            
            conn = odbc.connect(conn_string)
            cursor = conn.cursor()

            # Your code for getting form values and database insertion here
            
            insert_statement = """
                INSERT INTO dbo.PLACEMENT ( [First_Name]
                    ,[Last_Name],
                    [Initial],
                    [Register_Number],
                    [College],[Degree],
                    [Your_Department],
                    [Date_Of_birth],
                    [Gender],
                    [10th_Percentage],
                    [10th_Year],
                    [10th_Board],
                    [10th_Board_Others],
                    [10th_School],
                    [10th_Medium],
                    [10th_Medium_Others],
                    [12th_Percentage],
                    [12th_Year],
                    [12th_Board],
                    [12th_Board_Others],
                    [12th_Stream],
                    [12th_Stream_Others],
                    [12th_School],
                    [12th_Medium],
                    [12th_Medium_Others],
                    [Diploma_Percentage],
                    [Diploma_Branch] ,
                    [Diploma_Year],
                    [Diploma_Class],
                    [Diploma_College],
                    [UG_Semester1],
                    [UG_Semester2],
                    [UG_Semester3],
                    [UG_Semester4],
                    [UG_Semester5],
                    [UG_Semester6],
                    [UG_Semester7],
                    [UG_Semester8],
                    [UG_CGPA],
                    [PG_Semester1],
                    [PG_Semester2],
                    [PG_Semester3],
                    [PG_Semester4],
                    [PG_CGPA],
                    [Arrear_Status],
                    [Number_Of_Attempts],
                    [Number_Of_Standing],
                    [Arrear_Details],
                    [Skill_Set],
                    [Value_Added_Certificate_Course],[Gate_Tancet_Score],
                    [GRE_TOFEL],
                    [Paper_Presentation],
                    [Language_Known],
                    [Language_Known_others],
                    [Mobile_Number],
                    [E_Mail],
                    [Permanent_Address],
                    [Permanent_City],
                    [Permanent_Pincode],
                    [Present_Address],
                    [Present_City],
                    [Present_Pincode],
                    [Father's_Name],
                    [Father's_Initial],
                    [Mother's_Name],
                    [Mother's_Initial],
                    [Father's_Occupation],
                    [Mother's_Occupation],
                    [Fathert's_Mobile],
                    [Mother's_Mobile],
                    [Community],
                    [Hosteller_Dayscholar],
                    [Cutoff_Mark],
                    [Mode_Of_Admission],
                    [First_Graduate],
                    [Blood_Group],
                    [Register_For_Placement],
                    [Passport_Details],
                    [Aadhaar_Details] ,
                    [Pan_Card],
                    [Ration_Card],
                    [Annual_Income],
                    [sibling])
                VALUES (?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                 ?,
                ?,
                ?)
            """

            # Replace the placeholders below with actual form data
            cursor.execute(insert_statement, ( request.form['fname'],
                             request.form['lname'],
                             request.form['initial'],
                            request.form['number'],
                            request.form.get('college'),
                            request.form.get('degree'),
       request.form.get('department'),
       request.form.get('birth'),
       request.form.get('gender'),
      request.form['10thpercentage'],
        request.form['10thyear'],
       request.form.get('10board'),
       request.form['10thothers'],
        request.form['10thschool'],
        request.form.get('10medium'),
        request.form['10mediumothers'],
        request.form['12thpercentage'],
        request.form['12thyear'],
         request.form.get('12thboard1'),
         request.form['board12others'],
        request.form.get('stream1'),
        request.form['Stream'],
         request.form['12thschool'],
        request.form.get('12thmedium'),
         request.form['12thmediumothers'],
         request.form.get('diplomapercentage'),
        request.form.get('diplomadepartment'),
        request.form['diplomayear'],
        request.form.get('class'),
         request.form['diplomacollege'],
         request.form['semester1'],
         request.form['semester2'],
         request.form['semester3'],
        request.form['semester4'],
       request.form['semester5'],
        request.form['semester6'],
       request.form['semester7'],
        request.form['semester8'],
        request.form['cgpa'],
         request.form['sem1'],
       request.form['sem2'],
        request.form['sem3'],
        request.form['sem4'],
        request.form['pgcgpa'],
         request.form.get('arrear'),
      request.form['arrearattempt'],
         request.form['noarrear'],
         request.form['arreardetails'],
          request.form['skill'],
         request.form['value'],
       request.form['gate'],
        request.form['gre'],
       request.form['paper'],
        request.form.get('language'),
         request.form['languageothers'],
         request.form['mobile'],
        request.form['email'],
         request.form['peraddress'],
        request.form['percity'],
         request.form['perpin'],
         request.form['preaddress'],
        request.form['precity'],
        request.form['prepin'],
       request.form['father'],
        request.form['fatherinitial'],
        request.form['mother'],
        request.form['motherinitial'],
       request.form['fatheroc'],
         request.form['motheroc'],
         request.form['fmobile'],
         request.form['mmobile'],
         request.form.get('community'),
         request.form.get('day'),
         request.form['cutoff'],
        request.form.get('mode'),
        request.form.get('grad'),
       request.form.get('blood'),
        request.form.get('pla'),
        request.form['passport'],
        request.form['aadhaar'],
        request.form['pan'],
        request.form['ration'],
        request.form['annual'],
        request.form['sibling']))

            # Commit the transaction and close the connection
            conn.commit()
            cursor.close()
            conn.close()
            # return 'Data inserted successfully'
            flash('Data inserted successfully', 'success')  # Flash a success message
            return redirect('/End.html')  # Redirect to the next page
        except odbc.Error as e:
            # Rollback the transaction in case of an error
            cursor.rollback()

            # Log the error
            logging.error(f'Database error: {str(e)}')

            # Return an error message to the user
            flash('Error inserting data. Please check the logs for details.', 'error')  # Flash an error message
            return redirect('/')

    return render_template('project2.html')
@app.route('/End.html')
def next_page():
    data_to_display = "This is the data you want to display on the End page."
    return render_template('End.html', data=data_to_display)

if __name__ == '__main__':
    app.run(debug=True)