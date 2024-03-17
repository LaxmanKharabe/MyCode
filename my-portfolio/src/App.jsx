import styles from './App.module.css'
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path='*' element={<><code>Something went wrong: please check the path</code></>} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
  )
}

export default App
