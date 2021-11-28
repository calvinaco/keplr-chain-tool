import React from 'react';
import { Menu, PageHeader } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './App.css';
import AddChainButton from './AddChainButton';
import { Cronostestnet_338_2 } from './chain/cronostestnet_338-2';
import { Cronosmainnet_25_1 } from './chain/cronosmainnet_25_1';
import { Cronostestnet_338_3 } from './chain/cronostestnet_338-3';
import { Testnet_Croeseid_4 } from './chain/testnet-croeseid-4';
import AddChainForm from './AddChainForm';

function App() {
  return (
    <div className="App">
      <PageHeader
        backIcon={false}
        title="Keplr Chain Tool"
        subTitle="Add chain to Keplr at ease"
      / >
      <a className="GitHubLink" href="https://github.com/calvinaco/keplr-chain-tool">https://github.com/calvinaco/keplr-chain-tool</a>

      <Menu mode="horizontal">
        <Menu.Item key="quickAdd" icon={<AppstoreOutlined />}>
          <a href="#QuickAdd">Quick Add Chains</a>
        </Menu.Item>
        <Menu.Item key="customChain" icon={<SettingOutlined />}>
          <a href="#CustomChain">Custom Chain</a>
        </Menu.Item>
      </Menu>
      <section id="QuickAdd">
        <PageHeader
          backIcon={false}
          title="Quick Add Chains"
        / >
        <ul className="ChainList">
          <li><AddChainButton network={Cronosmainnet_25_1} /></li>
          <li><AddChainButton network={Cronostestnet_338_3} /></li>
          <li><AddChainButton network={Cronostestnet_338_2} /></li>
          <li><AddChainButton network={Testnet_Croeseid_4} /></li>
        </ul> 
      </section>
      <section id="CustomChain">
        <PageHeader
          backIcon={false}
          title="Custom Chain"
        / >
        <AddChainForm />
      </section>
    </div>
  );
}

export default App;
