import React, { useState } from 'react';
import'./Statefilter.css';

// List of CSE colleges for each state (including both private and government colleges)
const collegesData = {
  'Andhra Pradesh': [
    { name: 'College of Engineering, Andhra University', url: 'https://www.audoa.ac.in/' },
    { name: 'NIT Warangal', url: 'https://www.nitw.ac.in/' },
    { name: 'Vignan University', url: 'https://www.vignan.ac.in/' },
    { name: 'JNTU Hyderabad', url: 'https://www.jntuh.ac.in/' },
    { name: 'KL University', url: 'https://www.klu.ac.in/' },
    { name: 'Amity University, Hyderabad', url: 'https://www.amity.edu/hyderabad/' },
  ],
  'Maharashtra': [
    { name: 'Indian Institute of Technology Bombay', url: 'https://www.iitb.ac.in/' },
    { name: 'VJTI Mumbai', url: 'https://www.vjti.ac.in/' },
    { name: 'MIT College of Engineering, Pune', url: 'https://mitpune.edu.in/' },
    { name: 'Sardar Patel Institute of Technology', url: 'https://www.spit.ac.in/' },
    { name: 'Pune Institute of Computer Technology', url: 'https://www.pict.edu/' },
    { name: 'DY Patil College of Engineering', url: 'https://www.dypcoe.edu.in/' },
  ],
  'Karnataka': [
    { name: 'Indian Institute of Science, Bangalore', url: 'https://www.iisc.ac.in/' },
    { name: 'NIT Surathkal', url: 'https://www.nitk.ac.in/' },
    { name: 'RV College of Engineering', url: 'https://www.rvce.edu.in/' },
    { name: 'BMS College of Engineering', url: 'https://www.bmsce.ac.in/' },
    { name: 'MS Ramaiah Institute of Technology', url: 'https://www.msrit.edu/' },
    { name: 'PES University', url: 'https://www.pes.edu/' },
  ],
  'Tamil Nadu': [
    { name: 'Indian Institute of Technology Madras', url: 'https://www.iitm.ac.in/' },
    { name: 'Anna University', url: 'https://www.annauniv.edu/' },
    { name: 'PSG Tech, Coimbatore', url: 'https://www.psgtech.edu/' },
    { name: 'SRM Institute of Science and Technology', url: 'https://www.srmist.edu.in/' },
    { name: 'VIT Vellore', url: 'https://www.vit.ac.in/' },
    { name: 'Vel Tech University', url: 'https://www.veltech.edu.in/' },
  ],
  'Delhi': [
    { name: 'Delhi Technological University', url: 'https://www.dtu.ac.in/' },
    { name: 'Indian Institute of Technology Delhi', url: 'https://www.iitd.ac.in/' },
    { name: 'Jamia Millia Islamia', url: 'https://www.jmi.ac.in/' },
    { name: 'Amity University', url: 'https://www.amity.edu/' },
    { name: 'Guru Gobind Singh Indraprastha University', url: 'https://www.ipu.ac.in/' },
  ],
  'Uttar Pradesh': [
    { name: 'Indian Institute of Technology Kanpur', url: 'https://www.iitk.ac.in/' },
    { name: 'Harcourt Butler Technical University', url: 'https://www.hbtu.ac.in/' },
    { name: 'Motilal Nehru National Institute of Technology', url: 'https://www.mnnit.ac.in/' },
    { name: 'Galgotias College of Engineering and Technology', url: 'https://www.gcet.edu.in/' },
    { name: 'Jaypee Institute of Information Technology', url: 'https://www.jiit.ac.in/' },
  ],
  'West Bengal': [
    { name: 'Indian Institute of Technology Kharagpur', url: 'https://www.iitkgp.ac.in/' },
    { name: 'Jadavpur University', url: 'https://www.jaduniv.edu.in/' },
    { name: 'Bengal Engineering and Science University', url: 'https://www.besu.ac.in/' },
    { name: 'Heritage Institute of Technology', url: 'https://www.heritageit.edu/' },
    { name: 'Techno India University', url: 'https://www.technoindiauniversity.ac.in/' },
  ],
  'Gujarat': [
    { name: 'Indian Institute of Technology Gandhinagar', url: 'https://www.iitgn.ac.in/' },
    { name: 'Nirma University', url: 'https://www.nirmauni.ac.in/' },
    { name: 'Sardar Vallabhbhai National Institute of Technology', url: 'https://www.svnit.ac.in/' },
    { name: 'Dhirubhai Ambani Institute of Information and Communication Technology', url: 'https://www.daiict.ac.in/' },
    { name: 'Parul University', url: 'https://www.paruluniversity.ac.in/' },
  ],
  'Rajasthan': [
    { name: 'Indian Institute of Technology Jodhpur', url: 'https://www.iitj.ac.in/' },
    { name: 'MNIT Jaipur', url: 'https://www.mnit.ac.in/' },
    { name: 'University of Rajasthan', url: 'https://www.uniraj.ac.in/' },
    { name: 'Shiv Nadar University', url: 'https://www.snu.edu.in/' },
    { name: 'Arya College of Engineering and IT', url: 'https://www.aryacollege.in/' },
  ],
  'Bihar': [
    { name: 'Indian Institute of Technology Patna', url: 'https://www.iitp.ac.in/' },
    { name: 'NIT Patna', url: 'https://www.nitp.ac.in/' },
    { name: 'BIT Mesra, Patna Campus', url: 'https://www.bitmesra.ac.in/' },
    { name: 'Bihar Engineering College', url: 'https://www.bec.ac.in/' },
  ],
  'Haryana': [
    { name: 'Indian Institute of Technology Roorkee', url: 'https://www.iitr.ac.in/' },
    { name: 'National Institute of Technology Kurukshetra', url: 'https://www.nitkkr.ac.in/' },
    { name: 'YMCA University of Science and Technology', url: 'https://www.ymcaust.ac.in/' },
    { name: 'Baba Farid College of Engineering', url: 'https://www.bfec.in/' },
  ],
  'Uttarakhand': [
    { name: 'Indian Institute of Technology Roorkee', url: 'https://www.iitr.ac.in/' },
    { name: 'Govind Ballabh Pant University of Agriculture and Technology', url: 'https://www.gbpuat.ac.in/' },
    { name: 'Dehradun Institute of Technology', url: 'https://www.dituniversity.edu.in/' },
  ],
  'Kerala': [
    { name: 'Indian Institute of Technology Palakkad', url: 'https://www.iitpkd.ac.in/' },
    { name: 'NIT Calicut', url: 'https://www.nitc.ac.in/' },
    { name: 'Amity University, Kochi', url: 'https://www.amity.edu/kochi/' },
    { name: 'Toc H Institute of Science and Technology', url: 'https://www.tist.ac.in/' },
  ],
  'Punjab': [
    { name: 'Indian Institute of Technology Ropar', url: 'https://www.iitrpr.ac.in/' },
    { name: 'Punjab Engineering College', url: 'https://www.pec.edu/' },
    { name: 'Chandigarh University', url: 'https://www.cuchd.in/' },
    { name: 'Lovely Professional University', url: 'https://www.lpu.in/' },
  ],
  'Chhattisgarh': [
    { name: 'National Institute of Technology Raipur', url: 'https://www.nitrr.ac.in/' },
    { name: 'Rungta College of Engineering', url: 'https://www.rungta.ac.in/' },
  ],
  'Himachal Pradesh': [
    { name: 'Indian Institute of Technology Mandi', url: 'https://www.iitmandi.ac.in/' },
    { name: 'National Institute of Technology Hamirpur', url: 'https://www.nith.ac.in/' },
    { name: 'Shoolini University', url: 'https://www.shooliniuniversity.com/' },
  ],
  'Odisha': [
    { name: 'National Institute of Technology Rourkela', url: 'https://www.nitrkl.ac.in/' },
    { name: 'Siksha O Anusandhan University', url: 'https://www.soa.ac.in/' },
    { name: 'KIIT University', url: 'https://www.kiit.ac.in/' },
  ],
  'Madhya Pradesh': [
    { name: 'Indian Institute of Technology Indore', url: 'https://www.iiti.ac.in/' },
    { name: 'Maulana Azad National Institute of Technology', url: 'https://www.manit.ac.in/' },
    { name: 'University Institute of Engineering and Technology', url: 'https://www.uiet.edu.in/' },
  ],
  'Assam': [
    { name: 'Indian Institute of Technology Guwahati', url: 'https://www.iitg.ac.in/' },
    { name: 'Tezpur University', url: 'https://www.tezu.ernet.in/' },
    { name: 'Assam Engineering College', url: 'https://www.aec.ac.in/' },
  ],
  'Jharkhand': [
    { name: 'Indian Institute of Technology Dhanbad', url: 'https://www.iitism.ac.in/' },
    { name: 'Birla Institute of Technology, Mesra', url: 'https://www.bitmesra.ac.in/' },
    { name: 'Xavier Institute of Social Service', url: 'https://www.xiss.ac.in/' },
  ],
  'Goa': [
    { name: 'Goa Engineering College', url: 'https://www.gec.ac.in/' },
    { name: 'NIT Goa', url: 'https://www.nitgoa.ac.in/' },
  ],
};

const StateFilter = () => {
  const [selectedState, setSelectedState] = useState('');
  const [colleges, setColleges] = useState([]);

  const states = Object.keys(collegesData);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setColleges(state ? collegesData[state] : []);
  };

  return (
    <div className="state-filter">
      <h2>Filter Colleges by State</h2>
      <label htmlFor="state">Select State: </label>
      <select id="state" value={selectedState} onChange={handleStateChange}>
        <option value="">--Select a State--</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <div className="colleges-list">
        {colleges.length > 0 ? (
          <ul>
            {colleges.map((college, index) => (
              <li key={index}>
                <a href={college.url} target="_blank" rel="noopener noreferrer">
                  {college.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No colleges available for the selected state.</p>
        )}
      </div>
    </div>
  );
};

export default StateFilter;
