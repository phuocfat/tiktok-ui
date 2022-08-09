import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRoute.map((route, index) => {
                  const Page = route.component;
                  const Layout = route.layout;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     >
                        route
                     </Route>
                  );
               })}
            </Routes>
         </div>
         ;
      </Router>
   );
}
export default App;
