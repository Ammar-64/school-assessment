import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBInputGroup, MDBFormInline, MDBBtn, MDBRow, MDBCol} from "mdbreact";




class FormTR extends Component{
  constructor(props){
    super(props);
    this.state = {
      schoolName:"", 
      schoolAddress: "",
      classNumberkg1: "",
      classNumberkg2: "",
      classNumberGrade1: "",
      classNumberGrade2: "",
      classNumberGrade3: "",
      classNumberGrade4: "",
      classNumberGrade5: "",
      classNumberGrade6: "",
      classNumberGrade7: "",
      classNumberGrade8: "",
      classNumberGrade9: "",
      classNumberGrade10: "",
      classNumberGrade11: "",
      classNumberGrade12: "",
      schoolStudentsNumber: "",
      classStudentNumber: "",
      roboticsTeacherNumber: "",
      numberOfRoboticsClasses: "",
      numberOfStudentsInRoboticsClasses: "",
      numberOfRoboticsClassesWeek: "",
      robotClassImplement: "",
      Kindergarten: "",
      Elementary: "",
      Secondary: "",
      highSchool: "",
      contactPerson: "",
      schoolPhoneNumber: "",
      schoolEmail: "",
      runRoboticsClasses: "",
      startDate: "",
      branches: "",
      branchesNumber: "",
    };
  }
  
    handlevaluesChange = event => {
      event.persist()
      this.setState({
        [event.target.id]: event.target.value
      })
    }
    handleCheckboxChange(event){ 
      if (event.target.checked) {
        event.persist()
        this.setState({      
            [event.target.id]: event.target.value
      })}
      else this.setState({      
        [event.target.id]: event.target.state
    })
    }
  
    handleSubmit = event => {
      
      event.preventDefault()
        
    const updateURL =  `https://firestore.googleapis.com/v1/projects/jcic-237410/databases/(default)/documents/school_assessment`;
            fetch(updateURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              fields: {
                "schoolName": {stringValue: JSON.stringify(this.state.schoolName)},
                "schoolAddress": {stringValue: JSON.stringify(this.state.schoolAddress)},
                "classNumberkg1": {stringValue: JSON.stringify(this.state.classNumberkg1)},
                "classNumberkg2": {stringValue: JSON.stringify(this.state.classNumberkg2)},
                "classNumberGrade1": {stringValue: JSON.stringify(this.state.classNumberGrade1)},
                "classNumberGrade2": {stringValue: JSON.stringify(this.state.classNumberGrade2)},
                "classNumberGrade3": {stringValue: JSON.stringify(this.state.classNumberGrade3)},
                "classNumberGrade4": {stringValue: JSON.stringify(this.state.classNumberGrade4)},
                "classNumberGrade5": {stringValue: JSON.stringify(this.state.classNumberGrade5)},
                "classNumberGrade6": {stringValue: JSON.stringify(this.state.classNumberGrade6)},
                "classNumberGrade7": {stringValue: JSON.stringify(this.state.classNumberGrade7)},
                "classNumberGrade8": {stringValue: JSON.stringify(this.state.classNumberGrade8)},
                "classNumberGrade9": {stringValue: JSON.stringify(this.state.classNumberGrade9)},
                "classNumberGrade10": {stringValue: JSON.stringify(this.state.classNumberGrade10)},
                "classNumberGrade11": {stringValue: JSON.stringify(this.state.classNumberGrade11)},
                "classNumberGrade12": {stringValue: JSON.stringify(this.state.classNumberGrade12)},                 
                "schoolStudentsNumber": {stringValue: JSON.stringify(this.state.schoolStudentsNumber)},
                "classStudentNumber": {stringValue: JSON.stringify(this.state.classStudentNumber)},
                "roboticsTeacherNumber": {stringValue: JSON.stringify(this.state.roboticsTeacherNumber)},
                "numberOfRoboticsClasses": {stringValue: JSON.stringify(this.state.numberOfRoboticsClasses)},
                "numberOfStudentsInRoboticsClasses": {stringValue: JSON.stringify(this.state.numberOfStudentsInRoboticsClasses)},
                "numberOfRoboticsClassesWeek": {stringValue: JSON.stringify(this.state.numberOfRoboticsClassesWeek)},
                "robotClassImplement": {stringValue: JSON.stringify(this.state.robotClassImplement)},
                "Kindergarten": {stringValue: JSON.stringify(this.state.Kindergarten)},
                "Elementary": {stringValue: JSON.stringify(this.state.Elementary)},
                "Secondary": {stringValue: JSON.stringify(this.state.Secondary)},
                "highSchool": {stringValue: JSON.stringify(this.state.highSchool)},
                "contactPerson": {stringValue: JSON.stringify(this.state.contactPerson)},
                "schoolPhoneNumber": {stringValue: JSON.stringify(this.state.schoolPhoneNumber)},
                "schoolEmail": {stringValue: JSON.stringify(this.state.schoolEmail)},
                "runRoboticsClasses": {stringValue: JSON.stringify(this.state.runRoboticsClasses)},
                "startDate": {stringValue: JSON.stringify(this.state.startDate)},
                "branches": {stringValue: JSON.stringify(this.state.branches)},
                "branchesNumber": {stringValue: JSON.stringify(this.state.branchesNumber)},
                }
            })
        });
        alert('İlginiz gerçekten takdir edildi, planlama ekibimiz bu reyting formuna dayanan detaylı teknik ve finansal teklif ile 2 iş günü içinde geri dönecektir')
        this.setState({
          schoolName:"", 
          schoolAddress: "",
          classNumberkg1: "",
          classNumberkg2: "",
          classNumberGrade1: "",
          classNumberGrade2: "",
          classNumberGrade3: "",
          classNumberGrade4: "",
          classNumberGrade5: "",
          classNumberGrade6: "",
          classNumberGrade7: "",
          classNumberGrade8: "",
          classNumberGrade9: "",
          classNumberGrade10: "",
          classNumberGrade11: "",
          classNumberGrade12: "",
          schoolStudentsNumber: "",
          classStudentNumber: "",
          roboticsTeacherNumber: "",
          numberOfRoboticsClasses: "",
          numberOfStudentsInRoboticsClasses: "",
          numberOfRoboticsClassesWeek: "",
          robotClassImplement: "",
          Kindergarten: "",
          Elementary: "",
          Secondary: "",
          highSchool: "",
          contactPerson: "",
          schoolPhoneNumber: "",
          schoolEmail: "",
          runRoboticsClasses: "",
          startDate: "",
          branches: "",
          branchesNumber: "",
        });
      }
  

  render() {
  return (
    <body>    
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center">
      <MDBCol md="8">
      <form onSubmit={this.handleSubmit}>
      <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okul Adı"  id="schoolName" value={this.state.schoolName} required onChange={this.handlevaluesChange}/>
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okul adresi" id="schoolAddress" value={this.state.schoolAddress}  required onChange={this.handlevaluesChange}/>
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Temas kurulacak kişinin ismi" id="contactPerson" value={this.state.contactPerson}  required onChange={this.handlevaluesChange}/>
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okul telefon numarası" id="schoolPhoneNumber" type="number" value={this.state.schoolPhoneNumber}  required onChange={this.handlevaluesChange}/>
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okul e-postası" type="email" id="schoolEmail" value={this.state.schoolEmail}  required onChange={this.handlevaluesChange}/>
    <div class="custom-control custom-checkbox ml-4">
      <input type="checkbox" class="custom-control-input" id="branches" Checked={this.state.branches} value="branches" onClick={this.handleCheckboxChange.bind(this)}></input>
      <label class="custom-control-label" for="branches">Okulunuzun başka şubeleri var mı?</label>
    </div>
    {this.state.branches &&<MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Kaç tane var?" type="number" id="branchesNumber" value={this.state.branchesNumber} required onChange={this.handlevaluesChange}/>}
    <div class="custom-control custom-checkbox ml-4">
      <input type="checkbox" style={{color: "#872825", fontWeight: "bold"}} class="custom-control-input" id="runRoboticsClasses" Checked={this.state.runRoboticsClasses} value="runRoboticsClasses" onClick={this.handleCheckboxChange.bind(this)}></input>
      <label class="custom-control-label" for="runRoboticsClasses">okulunuz robotik dersleri veriyor mu?</label>
    </div>
    {this.state.runRoboticsClasses &&<MDBInput label="Ne zamandan beri?" type="number" id="startDate" value={this.state.startDate} required onChange={this.handlevaluesChange}/>}
    <br />
    <div>
      <span>Okulda mevcut aşamalar:</span>
      <div>
      <div class="custom-control custom-checkbox ml-4">
        <input type="checkbox" class="custom-control-input" id="Kindergarten" Checked={this.state.Kindergarten} value="Kindergarten" onClick={this.handleCheckboxChange.bind(this)}></input>
        <label class="custom-control-label" for="Kindergarten">Anaokulu</label>
      </div>
      {this.state.Kindergarten && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzda kaç KG1 sınıf var?" type="number" id="classNumberkg1" value={this.state.classNumberkg1} disabled={!this.state.Kindergarten} onChange={this.handlevaluesChange}/>}
      {this.state.Kindergarten && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzda kaç KG2 sınıf var?" type="number" id="classNumberkg2" value={this.state.classNumberkg2} disabled={!this.state.Kindergarten} onChange={this.handlevaluesChange}/>}
      <div class="custom-control custom-checkbox ml-4">
        <input type="checkbox" class="custom-control-input" id="Elementary" Checked={this.state.Elementary} value="Elementary" onClick={this.handleCheckboxChange.bind(this)}></input>
        <label class="custom-control-label" for="Elementary">İlkokul</label>
      </div>
      {this.state.Elementary && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 1. sınıfı var?" type="number" id="classNumberGrade1" value={this.state.classNumberGrade1} disabled={!this.state.Elementary} onChange={this.handlevaluesChange}/>}
      {this.state.Elementary && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 2. sınıfı var?" type="number" id="classNumberGrade2" value={this.state.classNumberGrade2} disabled={!this.state.Elementary} onChange={this.handlevaluesChange}/>}
      {this.state.Elementary && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 3. sınıfı var?" type="number" id="classNumberGrade3" value={this.state.classNumberGrade3} disabled={!this.state.Elementary} onChange={this.handlevaluesChange}/>}
      {this.state.Elementary && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 4. sınıfı var?" type="number" id="classNumberGrade4" value={this.state.classNumberGrade4} disabled={!this.state.Elementary} onChange={this.handlevaluesChange}/>}      
      <div class="custom-control custom-checkbox ml-4">
        <input type="checkbox" class="custom-control-input" id="Secondary" Checked={this.state.Secondary} value="Secondary" onClick={this.handleCheckboxChange.bind(this)}></input>
        <label class="custom-control-label" for="Secondary">Ortaokul</label>
      </div>
      {this.state.Secondary && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 5. sınıfı var?" type="number" id="classNumberGrade5" value={this.state.classNumberGrade5} disabled={!this.state.Secondary} onChange={this.handlevaluesChange}/>}
      {this.state.Secondary && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 6. sınıfı var?" type="number" id="classNumberGrade6" value={this.state.classNumberGrade6} disabled={!this.state.Secondary} onChange={this.handlevaluesChange}/>}
      {this.state.Secondary && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 7. sınıfı var?" type="number" id="classNumberGrade7" value={this.state.classNumberGrade7} disabled={!this.state.Secondary} onChange={this.handlevaluesChange}/>}
      {this.state.Secondary && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 8. sınıfı var?" type="number" id="classNumberGrade8" value={this.state.classNumberGrade8} disabled={!this.state.Secondary} onChange={this.handlevaluesChange}/>}      
      <div class="custom-control custom-checkbox ml-4">
        <input type="checkbox" class="custom-control-input" id="highSchool" Checked={this.state.highSchool} value="highSchool" onClick={this.handleCheckboxChange.bind(this)}></input>
        <label class="custom-control-label" for="highSchool">Lise</label>
      </div>
      {this.state.highSchool && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 9. sınıfı var?" type="number" id="classNumberGrade9" value={this.state.classNumberGrade9} disabled={!this.state.highSchool} onChange={this.handlevaluesChange}/>}
      {this.state.highSchool && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 10. sınıfı var?" type="number" id="classNumberGrade10" value={this.state.classNumberGrade10} disabled={!this.state.highSchool} onChange={this.handlevaluesChange}/>}
      {this.state.highSchool && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 11. sınıfı var?" type="number" id="classNumberGrade11" value={this.state.classNumberGrade11} disabled={!this.state.highSchool} onChange={this.handlevaluesChange}/>}
      {this.state.highSchool && <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzun kaç tane 12. sınıfı var?" type="number" id="classNumberGrade12" value={this.state.classNumberGrade12} disabled={!this.state.highSchool} onChange={this.handlevaluesChange}/>}      
      </div>            
    </div>    
    
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzda kaç öğrenci var (5 yaş ve üstü)?" type="number" id="schoolStudentsNumber" value={this.state.schoolStudentsNumber} required onChange={this.handlevaluesChange}/>
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Her sınıfta kaç öğrenci var?" type="number" id="classStudentNumber" value={this.state.classStudentNumber} required onChange={this.handlevaluesChange}/>
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuzda kaç robotik öğretmen var?" type="number" id="roboticsTeacherNumber" value={this.state.roboticsTeacherNumber} required onChange={this.handlevaluesChange}/>
    <MDBInputGroup
          containerClassName="mb-3"
          class="md-form form-lg"
          prepend="Okulunuz robotik derslerini nasıl veriyor?"
          inputs={
            <select className="browser-default custom-select" id='robotClassImplement' required onChange={this.handlevaluesChange}>
              <option value="PleaseSelect" disabled selected>Lütfen Seçin</option>
              <option value="duringSchool" id="duringSchool">Müfredat</option>
              <option value="afterSchool" id="afterSchool">Ekstra müfredat</option>
            </select>
          }
        />
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuz aynı anda kaç robotik eğitim görüyor?" type="number" id="numberOfRoboticsClasses" value={this.state.numberOfRoboticsClasses} required onChange={this.handlevaluesChange}/>
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Her bir robotik dönemde kaç öğrenci var?" type="number" id="numberOfStudentsInRoboticsClasses" value={this.state.numberOfStudentsInRoboticsClasses} required onChange={this.handlevaluesChange}/>
    <MDBInput style={{color: "#872825", fontWeight: "bold"}} label="Okulunuz haftada kaç robotik dönem geçiriyor?" type="number" id="numberOfRoboticsClassesWeek" value={this.state.numberOfRoboticsClassesWeek} required onChange={this.handlevaluesChange}/>
    <div className="text-center">
              <MDBBtn color="blue lighten-4" type="submit">Gönder</MDBBtn>
            </div>
            </form>
            </MDBCol>
            </MDBRow>
    </MDBContainer>
    </body>
  );}
}
    
export default FormTR;