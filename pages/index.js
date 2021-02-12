import LogInInputCard from "../components/log-in-input-card"
import SplashCopy from "../components/splash-copy"

export default function Home() {
  return (
    <div className="px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center" style={{flexDirection: "column"}}>
      <SplashCopy></SplashCopy>
      <LogInInputCard></LogInInputCard>
    </div>
  )
}
