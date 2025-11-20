import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Research(){
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert">
          <h1>Research</h1>
          <p>
            This project explores multi-input computer vision for nutritional deficiency screening. We fuse signals from five anatomical regions and use attention-based architectures to provide explainable predictions.
          </p>
          <h2>Method Overview</h2>
          <ul>
            <li>Multi-branch CNN encoders per input</li>
            <li>Cross-modal attention fusion</li>
            <li>Uncertainty calibration and confidence intervals</li>
            <li>Grad-CAM visual explanations</li>
          </ul>
          <h2>Ethics & Privacy</h2>
          <p>Images are processed under strict privacy controls. No data is shared with third parties without consent.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}