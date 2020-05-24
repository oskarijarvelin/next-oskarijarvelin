import Header from '../components/header';

export default function Layout({children, title}) {
  return (
    <div>
        <Header />

        {children}

        <footer>
            <p>&copy; 2012 - {new Date().getFullYear()}: <span>Oskari Järvelin</span></p>
        </footer>   
    </div>
  )
}