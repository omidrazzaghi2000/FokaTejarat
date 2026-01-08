import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import getTheme from './theme/theme';
import Layout from './layout/Layout';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ArticlesPage from './pages/ArticlesPage';
import ReportsPage from './pages/ReportsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ReportDetailPage from './pages/ReportDetailPage';

const App = (): JSX.Element => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | فوکا تجارت"
        defaultTitle="فوکا تجارت"
      />
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/products/:id' element={<ProductDetailPage />} />
              <Route path='/articles' element={<ArticlesPage />} />
              <Route path='/articles/:id' element={<ArticleDetailPage />} />
              <Route path='/reports' element={<ReportsPage />} />
              <Route path='/reports/:id' element={<ReportDetailPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
