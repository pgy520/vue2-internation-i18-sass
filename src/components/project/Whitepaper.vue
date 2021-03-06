<template>
  <div class="container">
            <div class="ub-content ub-whitepaper">
                <h1>
                    {{$t('nav.white_paper')}}
                    <a href="https://www.ub.com/src/Whitepaper.pdf" target="_blank" style="color:#00ccff;font-size:12px;margin:0 10px">Download PDF</a>
                </h1>
                    <div class="explain">
                        <span>Terminology</span>
                        <p>UB:Abbreviation of the basic currency of UnitedBitcoin, and also abbreviation of UnitedBitcoin, official website: WWW.UB.COM</p>
                    </div>
                    <h2><span>Part One:</span>Abstract</h2>
                <div class="ub-text">
                    <h2>(UB coin = UBTC)</h2>
                    <p>As an excellent representative of digital currencies, Bitcoin brings irreversible transaction implementation and decentralized consensus to the world. Bitcoin’s price reflects its value as a disruptive technology, a store of value, and a medium of exchange. Even with the advent of numerous altcoins, Bitcoin has remained dominant in the space and has found increased legitimacy in the eyes of traditional markets through futures trading.</p>
                    <p>Bitcoin is the best example of applied blockchain technology. It was started and initially adopted by technology enthusiasts and is now spreading around the world.</p>
                    <p>Bitcoin functions as a currency. However, Bitcoin’s value was initially extremely low. Consequently, people did not take the necessary security precautions. While technically these Bitcoins haven’t gone anywhere, in practice they lower the circulating supply of Bitcoin. Without private keys these coins are locked away, unable to be reclaimed.</p>
                    <p>While this is deflationary and has driven Bitcoin’s price up, it is not enough to aid further development. Its high price, high transaction costs and low quantity of available Bitcoin will limit its growth.</p>
                    <p>The mission of UB is to find a purpose for lost Bitcoin and inactive wallets, and create a stable cryptocurrency system (UB Stable Coin) through an association of joint credit and smart contracts.</p>
                    <p>UB will use the pressure-tested mechanics of Bitcoin, such as Proof of Work (PoW), block times, supply cap, and issuance model, while it upgrades areas to accommodate for larger social demands. These improvements will be an increase in block size to 8mb, the addition of smart contract support based on UVM, the addition of lightning network support, and Segregated Witness (SegWit) implementation.</p>
                    <p style="text-align:center">Business vision:</p>
                    <p style="margin-top: 30px;" class="img-w"><img src="../../images/home/businessvision.png"></p>


                </div>
                    <h2><span>Part Two:</span>Operating Model</h2>
                <div class="ub-text">
                    <p>UB will fork away from the Bitcoin network, and immediately improve its protocol in the new network. All active Bitcoin addresses will receive corresponding balances on UB’s chain.</p>
                    <p>Balances of inactive addresses will be collected and used to serve the community.</p>
                    <p>30% of the inactive balances will be distributed to other technologically influential communities in the cryptocurrencies space to further increase the influence and adoption of UB.</p>
                    <p>70% of the inactive balances will be reserved as collateral to issue UB Stable Coin pegged to chosen fiat currencies, similar to a gold standard. However, unlike a gold standard where the mint ratio (the fixed exchange rate between gold and dollar value) tends to overvalue gold, the UB standard is designed to keep the reserve UBTC value over-collateralized against the value of the issued pegged coins. The ratio is targeted to be around 3:1 (i.e. for every UBTC reserved, we can only issue UB Stable Coin up to 33.3% of one coin’s market value). If the market price of UBTC increases, then it provides more value capacity to issue more stable coins, but no new stable coins will necessarily be issued; if the market price of UBTC decreases such that the value of UB Stable Coin breaches 33.3% value of the reserved UBTC, then it’s compulsory that the UB Stable Coin be bought back until the 33.3% safe line is satisfied. This is similar to how the Federal Reserve interacts with US Dollar Liquidity Fund.</p>
                    <p>UB Stable Coin backed by UBTC reserves is intended for use in global trade or large-scale projects which may result in a greatly enhanced ease of use and popularity of UB’s systems.</p>
                    <p>UB is set to become a global savings union of joint credit. The new smart contract function based on PoW will also provide infinite possibilities to UB.</p>
                    <p style="text-align:center">Differentiation between active and inactive bitcoins:</p>
                    <p style="margin-top: 30px;" class="img-w"><img src="../../images/home/btc-pic.png"></p>
                </div>
                    <h2><span>Part Three:</span>Technical Solution</h2>
                <div class="ub-text">
                    <p>While Bitcoin is by far the most secure and most dominant cryptocurrency right now, it also has some imperfections, mainly because it was the first.</p>
                </div>

                    <h3>UTXO Data Model</h3>
                    <p>Over the last nine years, the UTXO data model used in Bitcoin has proven to be a dependable way to create a stable and reliable digital currency. The most important function of a currency is to be a medium-of-exchange and the UTXO model does this wonderfully. Inheriting this through the fork is of utmost importance to UB.</p>
                    <h3>SHA256 PoW Mining Model</h3>
                    <p>UB keeps the mining algorithm of Bitcoin. Although energy consumption is a concern with PoW, it has a very solid track record and has demonstrated itself to be very secure.</p>
                    <h3>Total quantity and block Time</h3>
                    <p>UB is a fork of Bitcoin and inherits its block time, halving time and total number of Bitcoin’s cap (21 million). These properties remain unchanged.</p>

                        <h3>Segregated Witness / SegWit</h3>
                <div class="ub-text">
                        <p>SegWit is the data structure improvement that puts digital signatures of TX_IN and TX_OUT outside the transaction. This solves the problem of transaction extensibility and eases the problem of block size limits; enhancing on-chain scalability.</p>
                        <p style="text-align:center">Before implementation of SegWit, the structure of the blockchain is as follows:</p>
                        <p class="img-w"><img src="../../images/home/IsolationVerification1.svg"></p>
                        <p style="text-align:center">After implementation of SegWit, the structure of the chainblock is as follows:</p>
                        <p class="img-w"><img src="../../images/home/IsolationVerification2.svg"></p>
                </div>
                        <h3>On-chain Scalability</h3>
                <div class="ub-text">
                        <p>Bitcoin’s current maximum number of transactions per second is around 7TPS. This does not accommodate the network’s needs at times, and therefore cannot begin to handle the needs of global transaction volume.</p>
                        <p>The implementation of SegWit, mentioned earlier, alleviates some of this, but only to a limited extent. Increasing the block size will result in a greater alleviation and provide significant room to grow, however this requires a hard fork. Hence, UB is taking this opportunity to increase the block size as well.</p>
                        <p>Increasing the block size and scaling will increase storage and network requirements. However, considering that most nodes are run by mining pools or companies, we believe this isn’t too much of a constraint and 8MB is an adequate value.</p>
                </div>

                        <h3>Replay protection</h3>
                        <p>Because UB is a fork of Bitcoin, we must ensure that transactions on one chain cannot be replayed on another chain. UB implements replay protection by introducing new transaction signatures. New SigHash types will also improve the overall security of the network.</p>
                        <h3>Asset Activation</h3>
                <div class="ub-text">
                    <p>After the fork, all active addresses on the Bitcoin network will receive equivalent balances on the UB network. Inactive addresses are addresses without activity since block height 494,000 (11 November 2017) and as a result didn't automatically receive UBTC during Phase 1 of the asset allocation procedure.</p>
                </div>
                        <h3>Smart Contracts</h3>
                <div class="ub-text">
                        <p>UB’s smart contracts allow users to write customized behaviors and use them in the blockchain, rather than having to do several (manual) predefined operations. By using smart contracts, users can easily configure complex transaction logic, as well as execute complex financial contracts. At the same time, users can extend functionality, add restrictions or add dynamic controls, without modifying or upgrading the blockchain.</p>
                        <p>Smart contracts allow users to register customized contract bytecode in the blockchain and invoke transactions in UB’s chain. The bytecode is executed in a Turing-complete virtual machine for blockchain.</p>
                        <p>Developers can write smart contracts using a programming language with friendly syntax, which is then compiled into contract bytecode and stored in the blockchain.</p>
                        <p>Each wallet of UB synchronizes the blockchain to a block with contract transactions, and invokes a virtual machine to perform and verify the relevant contract bytecode.</p>
                </div>
                            <h4>Types of Contract Transactions</h4>
                <div class="ub-text">
                            <p>The ScriptPubKey lock script area of the transaction can increase the contract related operators to trigger the registration contract, invoke the contract, upgrade the contract, and/or cancel the contract. Transactions with these operators will trigger the smart contract virtual machine to perform the associated contract bytecode.</p>
                            <p>The operator of the registration contract will execute the contract bytecode to register on the chain as a new smart contract, and once successful a new smart contract address will be assigned.</p>
                            <p>The operator that invokes the contract, invokes the smart contract on a chain, executes the corresponding bytecode, and generates certain execution results, such as transfer or contract status changes.</p>
                            <p>The operator of the upgraded contract can assign a unique name to an un-upgraded and unwritten contract on the blockchain, and mark the contract as un-cancellable. This smart contract is invoked by the user or other contract by the contract name.</p>
                            <p>The operator of the logout contract can mark an un-upgraded and unwritten contract on the user-created blockchain as cancelled. The cancelled contract will not disappear from the blockchain, but cannot be called again, only the relevant historical data can be queried.</p>
                </div>
                            <h4>Contract Virtual Machine</h4>
                <div class="ub-text">
                            <p>The contract virtual machine uses Turing-complete virtual machine for implementation. The contract virtual machine has a high performance, is scalable and can interact with the UB blockchain. It can also enforce bytecode of smart contracts and return the results.</p>
                            <p>The contract virtual machine of UB has the characteristics of definitiveness, and the same results can be found at any time after the transaction of a contract is recorded on the blockchain, which can be verified and reinstated.</p>
                            <p>The contract virtual machine uses the account model to carry out value transfer, which makes it more user-friendly to developers in the preparation of smart contracts, and the UTXO transaction model of UB’s blockchain is passed through the account abstraction layer.</p>
                            <p>Developers can use a variety of high-level programming languages for smart contract development, and compile and generate contract bytecode to be stored in UB’s blockchain.</p>
                            <p>After weighing different options, UB has decided to adopt UVM virtual machine, which is based on improvements of LUA, and subsequently supports simulated languages similar to C#, Java and EVM. Other types of virtual machines will be added in the future to achieve the most extensive technical community support possible. UVM is one of the most efficient virtual machines and its underlying language has been used for years in practical applications.</p>
                            <p>In terms of security, UVM will remove some functionality such as external IO. In terms of stability, the UVM financial dual-process ensures the feature of exits from abnormal processes and continual executions.</p>
                </div>
                            <h4>Mechanism of Gas</h4>
                <div class="ub-text">
                            <p>The implementation of smart contracts requires gas, which is the economic cost of implementing smart contracts. Gas in UB’s Chain uses UBTC as system base coins. The gas mechanism increases the cost of attacking the blockchain, through a large number of sending contracts, and pays for the implementation of the smart contract for the blockchain ecosystem.</p>
                            <p>Different contract calls require a different amount of gas, depending on the number of contract bytecode instructions and the types of instructions in the execution process.</p>
                            <h4>Contract State Storage</h4>
                            <p>Each smart contract has an isolated storage area for housekeeping, and to record the status data of the smart contract. When the contract is executed, it can modify or query the storage of the contract. Changes to the storage can only be submitted to the blockchain if execution succeeds. When retroversion of a block of blockchain occurs, the storage of the contract needs to revert back to its previous state, based on the history of the storage.</p>
                            <p style="text-align:center">The functions of the smart contract virtual machine are as follows:</p>
                            <p class="img-w"><img src="../../images/home/ContractStateStorage.svg"></p>
                </div>




                            <h4>Contract Books</h4>
                            <p>Each smart contract has a contract address, and the contract address can possess blockchain assets and receive transfers. During contract execution, transactions arising from a contract transfer to another address, following the execution of a contract call, are known as result transactions. The result transaction's ScriptPubKey lock script region contains scripts from contract transfers to other addresses. The assets of the contract address are transferred out of contract execution and consensus, without the need for a private key to sign the behavior of the contract address asset.</p>



                        <h3>Lightning Network</h3>
                <div class="ub-text">
                        <p>Currently, the Bitcoin network mines blocks once every 10 minutes. This means that the fastest a transaction between two parties can take place is 10 minutes. But to ensure this, users have to pay higher fees – which can be excessive due to network congestion. Often, users need to wait even longer for their transactions to confirm if they do not want to pay the highest fees, or worse, transactions can be abandoned altogether. This makes quick transfers virtually impossible on the Bitcoin network. A solution to this, along with the SegWit implementation and larger block sizes mentioned above, is something called the lightning network. The lightning network is an off-chain payment channel, which parties can set up for near-instant transactions, at low fees. These transactions are secure, and the only time they go on-chain are when parties enter or leave contracts.</p>
                        <p>Features of Lightning Network:</p>
                </div>
                            <h4>Direct transactions</h4>
                            <p>In the current BTC network, the user-initiated transactions need to be packaged to blocks and broadcast to the network to be confirmed by each node. However, in the lightning network, an authentication process is not needed and the transaction is made directly with the counterpart.</p>
                            <h4>Micro-transactions</h4>
                            <p>On the BTC network, when the user makes the transfer, the amount of the transfer needs to be higher than the minimum value. On the lightning network, there is no such restriction, and the user can create the transaction freely.</p>
                            <h4>Scalability</h4>
                            <p>To broadcast the block transactions on the BTC network, the number of transactions carried in each block is limited because of the bandwidth. However, on the lightning network, there is no restriction on the number of transactions, so the user can send huge amounts of data within a short period of time.</p>
                            <h4>Implementation mode</h4>
                <div class="ub-text">
                            <p>Both parties participating in the transaction need to create a 2/2 multi-signature address as a transaction channel and deposit a relevant amount in the channel. The transaction between both parties is actually a consensus on the amount of the multi-signature address. After the last consensus, the transaction between the two parties ends and the final amount of the two parties will be determined. The transaction between the two parties will not be recorded on the chain.</p>
                            <p class="img-w"><img src="../../images/home/Implementationmode.svg"></p>
                </div>

                <h2><span>Part Four:</span>Timeline</h2>
                <div class="ub-text">
                    <p class="timeline">
                        <span>11th December 2017</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=192" target="_blank" role="button">Phase 1 distribution</a>
                    </p>
                    <p class="timeline">
                        <span>12th December 2017 </span>
                        <a href="https://www.youtube.com/watch?v=0hpr0YanLX4&t=214s" target="_blank" role="button">UB launch in Silicon Valley</a>
                    </p>
                    <p class="timeline">
                        <span>15th December 2017</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=196" target="_blank" role="button">Ambassador program announced</a>
                    </p>
                    <p class="timeline">
                        <span>22nd December 2017</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=207" target="_blank" role="button">Full node reward program announcement</a>
                    </p>
                    <p class="timeline">
                        <span>29th December 2017</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=209" target="_blank" role="button">Open Letter to UBTC community (including Phase 2 process)</a>
                    </p>
                    <p class="timeline">
                        <span>3rd January 2018</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=213" target="_blank" role="button">Phase 2 distribution</a>
                    </p>
                    <p class="timeline">
                        <span>4th January 2018</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=213" target="_blank" role="button">Final block height to end Phase 2 is 502,315.</a>
                    </p>
                    <p class="timeline">
                        <span>13th January 2018</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=280" target="_blank" role="button">Phase 2 grace period announcement</a>
                    </p>
                    <p class="timeline">
                        <span>14th January 2018</span>
                        <a href="https://www.youtube.com/watch?v=-7luGSLoZTA" target="_blank" role="button">Roadshow in Shanghai</a>
                    </p>
                    <p class="timeline">
                        <span>15th January 2018</span>
                        <a href="https://www.youtube.com/watch?v=k3iMVpMbSKc&t=44s" target="_blank" role="button">Documentary, episode 1 released</a>
                    </p>
                    <p class="timeline">
                        <span>19th January 2018</span>
                        <a href="https://youtu.be/1-RXri70ens" target="_blank" role="button">Documentary, episode 2 released</a>
                    </p>
                    <p class="timeline">
                        <span>22nd January 2018</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=288" target="_blank" role="button">Distribution community airdrop distribution announcement</a>
                    </p>
                    <p class="timeline">
                        <span>24th January 2018</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=297" target="_blank" role="button">Phase 2 distribution begins</a>
                    </p>
                    <p class="timeline">
                        <span>30th January 2018</span>
                        <a href="https://www.youtube.com/watch?v=9fL0o32ShJk" target="_blank" role="button">Documentary, episode 3 released</a>
                    </p>
                    <p class="timeline">
                        <span>1st February 2018 </span>
                        <span>HSR & QTUM snapshot at UTC 12pm. </span>
                    </p>
                    <p class="timeline">
                        <span>1st February 2018 </span>
                        <span>HSR & QTUM snapshot at UTC 12pm. </span>
                    </p>
                    <p class="timeline">
                        <span>11th February 2018</span>
                        <span>ETH & LTC snapshot at UTC 12pm.</span>
                    </p>
                    <p class="timeline">
                        <span>14th February 2018</span>
                        <a href="https://www.ub.com/news/detail?column=1&id=335" target="_blank" role="button">Phase 2 grace period ends</a>
                    </p>
                    <p class="timeline">
                        <span>15th February 2018</span>
                        <span>Phase 2 grace period distribution</span>
                    </p>
                    <p class="timeline">
                        <span>21st February 2018</span>
                        <span>INK snapshot at UTC 12pm.</span>
                    </p>
                </div>
                <h3>Ongoing</h3>
                <p class="listp">Phase 2 Distribution (from lowest claims first)</p>
                <p class="listp">Community airdrop (commenced February 2018)</p>
                <h3>Coming Soon</h3>
                <p class="listp">Launch of smart contract support</p>
                <p class="listp">Launch of lightning network support</p>
                <p class="listp">Launch of UB Stable Coin</p>
                <div class="ub-ecosystem">
                    <h2><span>Part Five:</span><b class="ecosystem_primary">{{$t('nav.ecosystem')}}</b></h2>
                    <h3>{{$t('nav.exchanges')}}</h3>
                    <ul>
                        <li>
                            <a href="https://trans.zb.com/ubtcbtc" target="_blank">
                                <div class="logo"><img src="../../images/zblogo.png"></div>
                                <h4>ZB</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.exx.com/trade/ubtc_btc" target="_blank">
                                <div class="logo"><img src="../../images/exxlogo.png"></div>
                                <h4>EXX</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.okex.com/" target="_blank">
                                <div class="logo"><img style="width: 100px;" src="../../images/okexlogo.png"></div>
                                <h4>OKEX</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.hksy.com/#/tradeCenter?payCoinName=HKD&coinName=UBTC" target="_blank">
                                <div class="logo"><img src="../../images/hksylogo.png"></div>
                                <h4>HKSY</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.qbtc.com/trade" target="_blank">
                                <div class="logo"><img src="../../images/qbtclogo.png"></div>
                                <h4>QBTC</h4>
                            </a>
                        </li>


                        <li>
                            <a href="https://acx.io/" target="_blank">
                                <div class="logo"><img style="width: 36px;" src="../../images/acxlogo.png"></div>
                                <h4>ACX</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://hb.top/" target="_blank">
                                <div class="logo"><img style="width: 80px;" src="../../images/hblogo.png"></div>
                                <h4>HB.top</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.shuzibi.com/" target="_blank">
                                <div class="logo"><img style="width: 80px;" src="../../images/shuzibilogo.png"></div>
                                <h4>数字币</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://trade.coincoming.com/" target="_blank">
                                <div class="logo"><img style="width: 100px;" src="../../images/coincominglogo.png"></div>
                                <h4>CoinComing</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.coinnest.co.kr/" target="_blank">
                                <div class="logo"><img style="width: 140px;" src="../../images/coinnestlogo.png"></div>
                                <h4>COINNEST</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.btctrade.im/" target="_blank">
                                <div class="logo"><img style="width: 150px;" src="../../images/btctradelogo.png"></div>
                                <h4>BtcTrade</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.aex.com/" target="_blank">
                                <div class="logo"><img style="width: 150px;" src="../../images/aexlogo.png"></div>
                                <h4>AEX</h4>
                            </a>
                        </li>

                        <li>
                            <a href="https://quoinex.com/" target="_blank">
                                <div class="logo"><img style="width: 130px;" src="../../images/quoinexlogo.png"></div>
                                <h4>QUOINEX</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.qryptos.com/" target="_blank">
                                <div class="logo"><img style="width: 150px;" src="../../images/qryptoslogo.png"></div>
                                <h4>QRYPTOS</h4>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.coolcoin.com/" target="_blank">
                                <div class="logo"><img style="width: 150px;" src="../../images/coolcoinlogo.png"></div>
                                <h4>CoolCoin</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.coinegg.com/" target="_blank">
                                <div class="logo"><img style="width: 130px;" src="../../images/coinegglogo.png"></div>
                                <h4>CoinEgg</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.to.cn/" target="_blank">
                                <div class="logo"><img style="width: 60px;" src="../../images/tologo.png"></div>
                                <h4>TO.CN</h4>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.nb.top" target="_blank">
                                <div class="logo"><img style="width: 100px;" src="../../images/newcoin.png"></div>
                                <h4>NEWCOIN</h4>
                            </a>
                        </li>

                    </ul>
                    <div class="more-exchanges" style="display: none"><a href="https://www.ub.com/project/ecosystem/exchanges" target="_blank">Check out the <em>55</em> exchanges coming soon</a></div>
                    <h3 style="margin-top: 50px;">Wallets/Full node</h3>
                    <ul>
                        <li>
                            <a href="http://www.ub.com/project/wallet" target="_blank">
                                <div class="logo"><img style="width: 110px;" src="../../images/home/logofoot.svg?1513593262610"></div>
                                <h4>UnitedBitcoin</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/unitedbitcoin" target="_blank">
                                <div class="logo"><img style="width: 36px;" src="../../images/gitlogo.png"></div>
                                <h4>Github</h4>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.hyperpay.tech/" target="_blank">
                                <div class="logo"><img style="width: 135px;" src="../../images/ecosystem/hplogo.png"></div>
                                <h4>HyperPay</h4>
                            </a>
                        </li>
                        <li>
                            <a href="http://beechat.com/" target="_blank">
                                <div class="logo"><img style="width: 36px;height:36px" src="../../images/beechat.png"></div>
                                <h4>Beechat</h4>
                            </a>
                        </li>
                    </ul>
                    <h3 style="margin-top: 50px;">{{$t('nav.explorer')}}</h3>
                    <ul>
                        <li>
                            <a href="https://block.bitbank.com/ubtc/" target="_blank">
                                <div class="logo"><img src="../../images/bitbanklogo.png"></div>
                                <h4>Bitbank</h4>
                            </a>
                        </li>
                    </ul>


                    <h3 style="margin-top: 50px;">Pools</h3>
                    <ul>
                        <li>
                            <a href="https://www.bw.com/" target="_blank">
                                <div class="logo"><img style="width: 80px;" src="../../images/bwlogo.png"></div>
                                <h4>BW</h4>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.btc.top/" target="_blank">
                                <div class="logo"><img src="../../images/btctoplogo.png"></div>
                                <h4>BTC.TOP</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.batpool.com/" target="_blank">
                                <div class="logo"><img style="width: 120px;" src="../../images/batpoollogo.png"></div>
                                <h4>BATPOOL</h4>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.vvpool.com/" target="_blank">
                                <div class="logo"><img style="width: 100px;" src="../../images/vvpoollogo.png"></div>
                                <h4>VVPool</h4>
                            </a>
                        </li>
                    </ul>


                </div>



</div>
</div>
</template>
<script>
export default {
   name:"Whitepaper"
}
</script>

