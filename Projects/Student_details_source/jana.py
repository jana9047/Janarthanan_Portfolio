# import sys
# import pypyodbc as odbc

# records = [
#     ['x', 'jana', 'm', 2020], 
#     ['y', 'kamal', 'm', 2019]
# ]

# DRIVER = 'SQL Server'
# SERVER_NAME = 'JANA'
# DATABASE_NAME = 'final'

# conn_string = f"""
#     Driver={{{DRIVER}}};
#     Server={SERVER_NAME};
#     Database={DATABASE_NAME};
#     Trust_Connection=yes;
# """

# try:
#     conn = odbc.connect(conn_string)
# except Exception as e:
#     print(e)
#     print('task is terminated')
#     sys.exit()
# else:
#     cursor = conn.cursor()


# insert_statement = """
#     INSERT INTO dbo.final
#     VALUES (?, ?, ?, ?)
# """

# try:
#     for record in records:
#         print(record)
#         cursor.execute(insert_statement, record)        
# except Exception as e:
#     cursor.rollback()
#     print(e.value)
#     print('transaction rolled back')
# else:
#     print('records inserted successfully')
#     cursor.commit()
#     cursor.close()
# finally:
#     if conn.connected == 1:
#         print('connection closed')
#         conn.close()

# from flask import Flask, , render_template
# import pypyodbc as odbc

# app = Flask(__name__)

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     if .method == 'POST':
#         # Get form values
      


#         # Database connection setup
#         DRIVER = 'SQL Server'
#         SERVER_NAME = 'JANA'
#         DATABASE_NAME = 'Student_Details'

#         conn_string = f"""
#             Driver={{{DRIVER}}};
#             Server={SERVER_NAME};
#             Database={DATABASE_NAME};
#             Trust_Connection=yes;
#         """

#         try:
#             conn = odbc.connect(conn_string)
#         except Exception as e:
#             print(e)
#             return 'Database connection failed'

#         cursor = conn.cursor()

#         insert_statement = """
#             INSERT INTO dbo.Student_Details3 (
#             First_Name,Last_Name,Initial,Register_Number,College,Degree,Your_Department,Date_Of_birth,Gender,10th_Percentage,10th_Year,10th_Board,10th_Board_Others,10th_School,10th_Medium,10th_Medium_Others,12th_Percentage,12th_Year,12th_Board,12th_Board_Others,12th_Stream,12th_Stream_Others,12th_School,12th_Medium,12th_Medium_Others,Diploma_Percentage,Diploma_Branch,Diploma_Year,Diploma_Class,Diploma_College,UG_Semester1,UG_Semester2,UG_Semester3,UG_Semester4,UG_Semester5,UG_Semester6,UG_Semester7,UG_Semester8,UG_CGPA,PG_Semester1,PG_Semester2,PG_Semester3,PG_Semester4,PG_CGPA,Arrear_Status,Number_Of_Attempts,Number_Of_Standing,Arrear_Details,Skill_Set,Value_Added/Certificate_Course,Gate_Tancet_Score,GRE/TOFEL,Paper_Presentation,Language_Known,Language_Known_others,Mobile_Number,E-Mail,Permanent_Address,Permanent_City,Permanent_Pincode,Present_Address,Present_City,Present_Pincode,Father's_Name,Father's_Initial,Mother's_Name,Mother's_Initial,Father's_Occupation,Mother's_OccupationFathert's_Mobile,Mother's_Mobile,Community,Hosteller/Dayscholar,Cutoff_Mark,Mode_Of_Admission,First_Graduate,Blood_Group,Register_For_Placement,Passport_Details,Aadhaar_Details,Pan_Card,Ration_Card,Annual_Income,sibling)
#             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?.)
#         """

#         try:
#             cursor.execute(insert_statement, (fname, lname, initial, regnumber, college, degree, department, dateofbirth, gender, percentage10, year10, board10, others10, school10, medium10, mediumothers10, percentage12, year12, board12, board12others, stream12, stream12others, school12, medium12, medium12others, percentagedip, branchdip, yeardip, classdip, collegedip, semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8, ugcgpa, sem1, sem2, sem3, sem4, pgcgpa, arrearstatus, arrearattempt, arrearstanding, arreardetails, skillset, value, gate, gre, paper, language, languageothers, mobile, email, peraddress, percity, perpin, preaddress, precity, prepin, faname, fainitial, mname, minitial, focc, mocc, fmobile, mmobile, community, hos, cutoff, moa, fg, blood, placement, passport, aadhaar, pan, ration, annual, siblings
# ))
#             conn.commit()
#             cursor.close()
#             conn.close()
#             return 'Data inserted successfully'
#         except Exception as e:
#             cursor.rollback()
#             print(e)
#             return 'Error inserting data'

#     return render_template('project1.html')

# if __name__ == '__main__':
#     app.run(debug=True)
# import logging
# from flask import Flask, , render_template
# import pypyodbc as odbc

# app = Flask(__name__)

# # Configure logging
# logging.basicConfig(filename='app.log', level=logging.ERROR, format='%(asctime)s - %(levelname)s - %(message)s')

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     conn = None  # Define the 'conn' variable here


#         try:
#             # Database connection setup
#             DRIVER = 'SQL Server'
#             SERVER_NAME = 'JANA'  # Replace with your server name or IP address
#             DATABASE_NAME = 'Student_Details'

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
#     INSERT INTO dbo.Student_Details3 (
#     First_Name, Last_Name, Initial, Register_Number, College, Degree, Your_Department, Date_Of_birth, Gender,
#     10th_Percentage, 10th_Year, 10th_Board, 10th_Board_Others, 10th_School, 10th_Medium, 10th_Medium_Others,
#     12th_Percentage, 12th_Year, 12th_Board, 12th_Board_Others, 12th_Stream, 12th_Stream_Others, 12th_School,
#     12th_Medium, 12th_Medium_Others, Diploma_Percentage, Diploma_Branch, Diploma_Year, Diploma_Class,
#     Diploma_College, UG_Semester1, UG_Semester2, UG_Semester3, UG_Semester4, UG_Semester5, UG_Semester6,
#     UG_Semester7, UG_Semester8, UG_CGPA, PG_Semester1, PG_Semester2, PG_Semester3, PG_Semester4, PG_CGPA,
#     Arrear_Status, Number_Of_Attempts, Number_Of_Standing, Arrear_Details, Skill_Set, Value_Added/Certificate_Course,
#     Gate_Tancet_Score, GRE/TOFEL, Paper_Presentation, Language_Known, Language_Known_others, Mobile_Number, E-Mail,
#     Permanent_Address, Permanent_City, Permanent_Pincode, Present_Address, Present_City, Present_Pincode,
#     Father's_Name, Father's_Initial, Mother's_Name, Mother's_Initial, Father's_Occupation, Mother's_Occupation,
#     Fathert's_Mobile, Mother's_Mobile, Community, Hosteller/Dayscholar, Cutoff_Mark, Mode_Of_Admission,
#     First_Graduate, Blood_Group, Register_For_Placement, Passport_Details, Aadhaar_Details, Pan_Card, Ration_Card,
#     Annual_Income, sibling)
#     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
# """


#             # Replace the placeholders below with actual form data
#             cursor.execute(insert_statement, (
#                 'fname_value', 'lname_value', 'initial_value', 'regnumber_value', 'college_value', 'degree_value', 'department_value', 'dateofbirth_value', 'gender_value', 'percentage10_value', 'year10_value', 'board10_value', 'others10_value', 'school10_value', 'medium10_value', 'mediumothers10_value', 'percentage12_value', 'year12_value', 'board12_value', 'board12others_value', 'stream12_value', 'stream12others_value', 'school12_value', 'medium12_value', 'medium12others_value', 'percentagedip_value', 'branchdip_value', 'yeardip_value', 'classdip_value', 'collegedip_value', 'semester1_value', 'semester2_value', 'semester3_value', 'semester4_value', 'semester5_value', 'semester6_value', 'semester7_value', 'semester8_value', 'ugcgpa_value', 'sem1_value', 'sem2_value', 'sem3_value', 'sem4_value', 'pgcgpa_value', 'arrearstatus_value', 'arrearattempt_value', 'arrearstanding_value', 'arreardetails_value', 'skillset_value', 'value_value', 'gate_value', 'gre_value', 'paper_value', 'language_value', 'languageothers_value', 'mobile_value', 'email_value', 'peraddress_value', 'percity_value', 'perpin_value', 'preaddress_value', 'precity_value', 'prepin_value', 'faname_value', 'fainitial_value', 'mname_value', 'minitial_value', 'focc_value', 'mocc_value', 'fmobile_value', 'mmobile_value', 'community_value', 'hos_value', 'cutoff_value', 'moa_value', 'fg_value', 'blood_value', 'placement_value', 'passport_value', 'aadhaar_value', 'pan_value', 'ration_value', 'annual_value', 'siblings_value'
#             ))

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
from flask import Flask, request, render_template
import pypyodbc as odbc

app = Flask(__name__)

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
            DATABASE_NAME = 'Student_Details'

            conn_string = f"""
                Driver={{{DRIVER}}};
                Server={SERVER_NAME};
                Database={DATABASE_NAME};
                Trust_Connection=yes;
            """
            
            conn = odbc.connect(conn_string)
            cursor = conn.cursor()

            # Your code for getting form values and database insertion here

            # Define your SQL INSERT statement with placeholders for form values
            insert_statement = """
                INSERT INTO dbo.Student_Details7 (
                    [First_Name]
                    ,[Last_Name],[Initial],[Register_Number],[College],[Degree],[Your_Department],[Date_Of_birth],[Gender],[10th_Percentage],[10th_Year],[10th_Board],[10th_Board_Others],[10th_School],[10th_Medium],[10th_Medium_Others],[12th_Percentage],[12th_Year],[12th_Board],[12th_Board_Others],[12th_Stream],[12th_Stream_Others],[12th_School],[12th_Medium],[12th_Medium_Others],[Diploma_Percentage],[Diploma_Branch] ,[Diploma_Year],[Diploma_Class],[Diploma_College],[UG_Semester1],[UG_Semester2],[UG_Semester3],[UG_Semester4],[UG_Semester5],[UG_Semester6],[UG_Semester7],[UG_Semester8],[UG_CGPA],[PG_Semester1],[PG_Semester2],[PG_Semester3],[PG_Semester4],[PG_CGPA],[Arrear_Status],[Number_Of_Attempts],[Number_Of_Standing],[Arrear_Details],[Skill_Set],[Value_Added_Certificate_Course],[Gate_Tancet_Score],[GRE_TOFEL],[Paper_Presentation],[Language_Known],[Language_Known_others],[Mobile_Number],[E_Mail],[Permanent_Address],[Permanent_City],[Permanent_Pincode],[Present_Address],[Present_City],[Present_Pincode],[Father's_Name],[Father's_Initial],[Mother's_Name],[Mother's_Initial],[Father's_Occupation],[Mother's_Occupation],[Fathert's_Mobile],[Mother's_Mobile],[Community],[Hosteller_Dayscholar],[Cutoff_Mark],[Mode_Of_Admission],[First_Graduate],[Blood_Group],[Register_For_Placement],[Passport_Details],[Aadhaar_Details] ,[Pan_Card],[Ration_Card],[Annual_Income],[sibling]
                    )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """

            # Replace the placeholders below with actual form data using .form
            cursor.execute(insert_statement, (
                             request.form['fname'],
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
        request.form['sibling']

            ))

            # Commit the transaction and close the connection
            conn.commit()
            cursor.close()
            conn.close()
            return 'Data inserted successfully'
        except odbc.Error as e:
            # Rollback the transaction in case of an error
            cursor.rollback()

            # Log the error
            logging.error(f'Database error: {str(e)}')

            # Return an error message to the user
            return 'Error inserting data. Please check the logs for details.'

    return render_template('project1.html')

if __name__ == '__main__':
    app.run(debug=True)
