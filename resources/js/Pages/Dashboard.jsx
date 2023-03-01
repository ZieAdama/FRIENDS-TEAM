import Boxicone from '@/ZComponents/Boxicone';
import Handernave from '@/ZComponents/Handernave';
import Layout from '@/ZLayouts/Layout';
import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
            <>
  {/* <!-- Content Wrapper. Contains page content --> */}
  <div className="content-wrapper">
    <Handernave />
    {/* <!-- Main content --> */}
    <div className="content">
      <div className="container-fluid">
        <Boxicone />
        <div className="row">
          

  
        </div>
       </div>
    </div>
  </div>
</>
    );
}

Welcome.layout = page => <Layout children={page} title= "Welcome" />
