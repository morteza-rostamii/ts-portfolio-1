import SectionModelY from './components/SectionModelY'
import SectionModel3 from './components/SectionModel3'
import SectionModelS from './components/SectionModelS'
import SectionModelX from './components/SectionModelX'
import SectionExperience from './components/SectionExperience'
import SectionSolar from './components/SectionSolar'

const Tesla = () => {
  return (
    <main
    className='
    bg-slate-50 
    '
    >
      {/* section 1 */}
      <SectionModelY/>
      <SectionModel3/>
      <SectionModelS/>
      <SectionModelX/>
      <SectionExperience/>
      <SectionSolar/>
      {/* 
      
      
      
      <SectionAccessories/> */}

    </main>
  )
}

export default Tesla