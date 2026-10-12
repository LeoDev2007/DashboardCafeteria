import { useState } from 'react'
import Welcome from './components/Welcome';
import FormGoal from './components/FormGoal';
import styles from './Goal.module.css'

const OnBoarding = () => {
    const [step, setStep] = useState(1);

  return (
    <div className={styles.onBoardingContainer}>
        {step === 1 && <Welcome onNext={() => setStep(2)} />}
        {step === 2 && <FormGoal />}
    </div>
  )
}

export default OnBoarding