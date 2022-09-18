export default function Main(props) {
  return (
    <main className='content container-fluid'>
      <div className='mt-3 p-3'>
        {props.children}
      </div>
    </main>
  )
}