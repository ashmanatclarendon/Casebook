/* Legal Lab Casebook — content
 * ------------------------------------------------------------
 * Inline concept links: [[key|text shown]]  (always give the display text)
 * Each key must exist in GLOSSARY. 'lesson' = Legal Lab lesson number (optional).
 * To add a case: append to CASES, bump CONTENT_VERSION here and CACHE in sw.js.
 * Write summaries in your own words — do not paste judgments or news articles.
 */
window.CONTENT_VERSION = '1.0.0';

window.GLOSSARY = {
  fairness:   {term:'Fairness', lesson:1, def:'A principle of justice: all people can participate in the justice system, and its processes are impartial and open.'},
  equality:   {term:'Equality', lesson:1, def:'A principle of justice: people are treated the same way — and where the same treatment creates disadvantage, adequate measures are put in place.'},
  access:     {term:'Access', lesson:1, def:'A principle of justice: all people can engage with the justice system and its processes on an informed basis.'},
  indictable: {term:'Indictable offence', lesson:2, def:'A more serious offence, heard in the County Court or Supreme Court.'},
  burden:     {term:'Burden of proof', lesson:3, def:'Which party must prove the case: the prosecution (criminal) or the plaintiff (civil).'},
  standard:   {term:'Standard of proof', lesson:4, def:'How much must be proved: beyond reasonable doubt (criminal); on the balance of probabilities (civil).'},
  presumption:{term:'Presumption of innocence', lesson:5, def:'An accused is treated as innocent until proven guilty beyond reasonable doubt.'},
  delay:      {term:'Right to be tried without unreasonable delay', lesson:6, def:'An accused\'s right not to wait longer for trial than the circumstances justify.'},
  silence:    {term:'Right to silence', lesson:7, def:'An accused need not answer police questions or give evidence, and silence cannot be used as evidence of guilt.'},
  jurytrial:  {term:'Right to trial by jury', lesson:8, def:'An accused charged with an indictable offence who pleads not guilty is tried by a jury of 12 in the County or Supreme Court.'},
  victims:    {term:'Rights of victims', lesson:9, def:'Including giving evidence using alternative arrangements, being informed about proceedings, and being told the offender\'s likely release date.'},
  vla:        {term:'Victoria Legal Aid', lesson:10, def:'A government-funded body providing legal information, advice and, subject to eligibility tests, funded legal representation.'},
  plea:       {term:'Plea negotiations', lesson:11, def:'Pre-trial discussions between the prosecution and the accused about the charges the accused will plead guilty to.'},
  appeals:    {term:'Appeals', lesson:12, def:'A higher court reviews a lower court\'s decision — usually on an error of law. A review, not a new trial.'},
  courtofappeal:{term:'Court of Appeal', lesson:12, def:'The division of the Supreme Court of Victoria that hears appeals.'},
  supremecourt:{term:'Supreme Court of Victoria', lesson:12, def:'Victoria\'s highest court. Its Trial Division hears the most serious criminal cases and large, complex civil cases, including class actions.'},
  countycourt:{term:'County Court', lesson:12, def:'Hears most indictable offences, and civil claims of any amount.'},
  highcourt:  {term:'High Court of Australia', def:'Australia\'s highest court. It hears final appeals (with special leave) and interprets the Constitution. More in Unit 4.'},
  judge:      {term:'Role of the judge', lesson:13, def:'An impartial umpire: decides questions of law (e.g. admissibility of evidence), directs the jury and, after a guilty verdict, sentences.'},
  jury:       {term:'Role of the jury', lesson:14, def:'Decides the facts and the verdict, based only on evidence presented in court. Criminal: 12 jurors.'},
  practitioners:{term:'Need for legal practitioners', lesson:15, def:'Lawyers are needed because procedures are complex, they are objective, they present cases effectively, and they help put parties on an equal footing.'},
  duty:       {term:'Lawyers\' duties', lesson:15, def:'A lawyer owes duties to their client and, above all, to the court. A lawyer must never act against their own client\'s interests.'},
  coststime:  {term:'Costs, time and cultural differences', lesson:16, def:'Factors that can affect whether the criminal justice system achieves fairness, equality and access.'},
  purposes:   {term:'Purposes of sanctions', lesson:17, def:'Rehabilitation, punishment, deterrence (general and specific), denunciation and protection.'},
  denunciation:{term:'Denunciation', lesson:17, def:'Sentencing purpose: expressing the community\'s disapproval of the offending.'},
  protection: {term:'Protection', lesson:17, def:'Sentencing purpose: protecting the community from the offender.'},
  imprisonment:{term:'Imprisonment', lesson:18, def:'The most severe sanction and a last resort. Removes the offender\'s liberty. A non-parole period is the minimum time served before parole can be considered.'},
  aggravating:{term:'Aggravating factors', lesson:19, def:'Circumstances that make the offending more serious and may increase the sentence.'},
  mitigating: {term:'Mitigating factors', lesson:19, def:'Circumstances that reduce the offender\'s culpability and may decrease the sentence.'},
  vis:        {term:'Victim impact statement', lesson:20, def:'A statement by a victim or their family describing the impact of the crime. The judge considers it at sentencing.'},
  plaintiff:  {term:'Plaintiff and defendant', lesson:21, def:'The plaintiff brings a civil claim and bears the burden of proof; the defendant is the party being sued.'},
  costs:      {term:'Costs (before suing)', lesson:22, def:'Legal fees, court fees, expert reports — and the risk of an adverse costs order if you lose.'},
  enforcement:{term:'Enforcement issues', lesson:22, def:'Whether a winning plaintiff can actually obtain the remedy — e.g. whether the defendant can pay.'},
  vcat:       {term:'VCAT', lesson:25, def:'The Victorian Civil and Administrative Tribunal: low-cost, less formal, organised into lists, and able to make binding orders. Appeals only on a question of law.'},
  hierarchycivil:{term:'Civil court hierarchy', lesson:26, def:'Reasons for the hierarchy in civil disputes: administrative convenience and appeals.'},
  civiljury:  {term:'Civil jury', lesson:27, def:'Six jurors, in the County or Supreme Court, if a party requests and pays for one. Decides liability.'},
  casemanagement:{term:'Case management', lesson:27, def:'The judge\'s active control of a civil case — directions and timetables — to keep cost and delay down.'},
  classaction:{term:'Class action', lesson:29, def:'One proceeding brought by a lead plaintiff on behalf of a group (7+) with claims against the same defendant arising from similar circumstances.'},
  settlement: {term:'Settlement', lesson:29, def:'An agreement between the parties that ends a dispute without a final judgment. Class action settlements must be approved by the court.'},
  damages:    {term:'Damages', lesson:30, def:'A remedy requiring the defendant to pay money to the plaintiff, mainly to restore them to their original position.'},
  compensatory:{term:'Compensatory damages', lesson:30, def:'Money to compensate actual loss: specific (calculable, e.g. lost income) and general (e.g. pain, hurt, damage to reputation).'},
  remedypurpose:{term:'Purposes of remedies', lesson:30, def:'Mainly to restore the plaintiff, as far as money or an order can, to the position they were in before the wrong.'},
  civilcosts: {term:'Costs and time (civil)', lesson:31, def:'Factors that can affect whether the civil justice system achieves fairness, equality and access.'},
  royalcommission:{term:'Royal Commission', def:'A government-appointed inquiry with strong powers to investigate a matter of public concern and recommend changes. More in Unit 4.'}
};

window.CASES = [

/* ------------------------------------------------------------ */
{ id:'dietrich', type:'Criminal', year:'1986–1992', where:'County Court → High Court',
  title:'Dietrich v The Queen',
  tagline:'Can you get a fair trial for a serious crime without a lawyer?',
  concepts:['practitioners','fairness','equality','vla','highcourt','appeals','indictable'],
  glance:[['Who','Olaf Dietrich, accused'],['Charge','Importing heroin (a serious Commonwealth offence)'],['Trial','County Court of Victoria, 1988 — about 40 days, unrepresented'],['Final court','High Court of Australia, 1992'],['Result','Conviction quashed; new trial ordered']],
  story:[
    'In December 1986, Olaf Dietrich flew into Melbourne from Thailand. Federal police arrested him and alleged he had smuggled heroin into Australia by swallowing small packets of the drug. He said the drugs had been planted.',
    'Importing heroin is an [[indictable|indictable offence]], and Dietrich pleaded not guilty. He had no money for a lawyer. He applied for legal aid, but was told aid would only be available if he pleaded guilty. Other attempts to get help also failed.',
    'So he defended himself — in a jury trial in the [[countycourt|County Court]] that lasted around forty days. He told the court more than once that he could not cope with running his own defence. The judge refused his request to delay the trial until he could find a lawyer.'
  ],
  court:[
    'The jury convicted Dietrich of importing heroin and he was sentenced to seven years\' imprisonment. The Victorian Court of Criminal Appeal refused to hear his appeal. He then went to the [[highcourt|High Court of Australia]].',
    'In November 1992, by a 5:2 majority, the High Court allowed his [[appeals|appeal]], quashed the conviction and ordered a new trial.',
    'The principle that came from the case: where a person is charged with a <b>serious offence</b>, cannot get a lawyer <b>through no fault of their own</b>, and asks for a delay, the judge should normally <b>adjourn or stay</b> the trial until representation is found — unless there are exceptional circumstances. Otherwise the trial may be unfair.',
    'Notice what the Court did <b>not</b> say: it did not create a right to a free lawyer. It protected the right to a <b>fair trial</b>, and said that for serious charges a lawyer is usually essential to that.'
  ],
  why:[
    'This is the classic case on the [[practitioners|need for legal practitioners]]. A forty-day trial involves rules of evidence, cross-examination and legal argument. An untrained accused facing a trained prosecutor is at a real disadvantage — a problem of [[equality|equality]].',
    'It is also about [[fairness|fairness]]: can an accused genuinely <i>participate</i> if they don\'t understand the process?',
    'And it put pressure on legal aid. After Dietrich, a trial could stall if no lawyer was found — so [[vla|legal aid bodies]] had a strong reason to fund representation in serious cases.'
  ],
  think:[
    {q:'Dietrich was offered legal aid if he pleaded guilty. Why might that offer itself raise a fairness concern?', a:'It could pressure an accused who believes they are innocent to plead guilty to get help. Fairness requires that people can participate fully — including by pleading not guilty and testing the prosecution\'s case.'},
    {q:'The case is about serious offences. Why might the principle not extend to every summary offence?', a:'Summary matters are simpler and shorter, consequences are usually less severe, and duty lawyers can often help on the day. The cost of funding lawyers for every case would be enormous.'}
  ],
  sources:['Dietrich v The Queen [1992] HCA 57; (1992) 177 CLR 292','Senate Legal and Constitutional Affairs Committee, Inquiry into the Australian Legal Aid System, ch 4']
},

/* ------------------------------------------------------------ */
{ id:'chamberlain', type:'Criminal', year:'1980–1988', where:'NT Supreme Court → High Court → Royal Commission',
  title:'The Chamberlain case',
  tagline:'A mother convicted of murder — and the evidence that set her free.',
  concepts:['presumption','standard','jury','appeals','highcourt','royalcommission','fairness'],
  glance:[['Who','Lindy and Michael Chamberlain'],['Event','Their baby, Azaria, disappeared at Uluru, August 1980'],['Trial','Northern Territory Supreme Court, 1982 — jury verdict of guilty'],['Appeals','Federal Court and High Court both dismissed'],['Result','Convictions quashed in 1988 after new evidence and a Royal Commission']],
  story:[
    'In August 1980, the Chamberlain family was camping near Uluru. Their nine-week-old daughter, Azaria, disappeared from the family tent. Lindy Chamberlain said she saw a dingo leaving the tent.',
    'The case gripped the nation. Media coverage was intense and much of the public was openly sceptical of Lindy\'s account. Police later charged her with murder, and her husband Michael as an accessory.',
    'Note: this case was in the Northern Territory, not Victoria — but the principles are the same across Australia.'
  ],
  court:[
    'In 1982, a [[jury|jury]] in the Northern Territory Supreme Court found Lindy guilty of murder. She was sentenced to life imprisonment. Michael received a suspended sentence. Forensic evidence — including claims about blood in the family car — was central to the prosecution case.',
    'The Chamberlains [[appeals|appealed]]. The Federal Court dismissed the appeal, and in 1984 the [[highcourt|High Court]] dismissed it too, by a narrow majority.',
    'In 1986, a piece of Azaria\'s clothing — her matinee jacket — was found near dingo lairs at Uluru. Lindy was released, and a [[royalcommission|Royal Commission]] examined the evidence. It found serious doubts about the forensic evidence used at trial. In 1988, the Northern Territory Court of Criminal Appeal quashed both convictions.',
    'Years later, in 2012, a coroner found that a dingo had taken Azaria.'
  ],
  why:[
    'The [[presumption|presumption of innocence]] and the [[standard|standard of proof]] exist to prevent exactly this: a conviction based on evidence that turns out to be unreliable. Ask whether guilt was really proven <i>beyond reasonable doubt</i>.',
    'It raises hard questions about the [[jury|jury]]: jurors must decide only on evidence presented in court — but how realistic is that when a case dominates the news for years?',
    'It shows both the value and the limits of [[appeals|appeals]]. Two appeal courts upheld the convictions. It took new evidence and an inquiry — not the ordinary appeal process — to correct the error. Lindy spent more than three years in prison.'
  ],
  think:[
    {q:'Why might intense media coverage threaten an accused\'s right to a fair trial?', a:'Jurors may form views before the trial begins, undermining impartiality (fairness) and the presumption of innocence. The jury is meant to decide on the evidence in court alone.'},
    {q:'An appeal is usually a review of the original decision, not a new trial. How did that limit the Chamberlains?', a:'Appeal courts mainly look for errors in the trial. Where the problem was unreliable evidence that only became clear later, an ordinary appeal could not fix it — new evidence and a special inquiry were needed.'}
  ],
  sources:['Chamberlain v The Queen (No 2) [1984] HCA 7','Royal Commission of Inquiry into Chamberlain Convictions (Morling), Report, 1987','Teacher check: verify dates and outcomes against these sources before use.']
},

/* ------------------------------------------------------------ */
{ id:'orman', type:'Criminal', year:'2002–2019', where:'Supreme Court → Court of Appeal',
  title:'Faruk Orman and "Lawyer X"',
  tagline:'What happens when your own lawyer secretly helps the police?',
  concepts:['duty','fairness','appeals','courtofappeal','jury','presumption','royalcommission'],
  glance:[['Who','Faruk Orman, accused'],['Charge','Murder of Victor Peirce (Port Melbourne, 2002)'],['Trial','Supreme Court jury, 2009 — guilty; 20 years\' jail'],['Appeal','Court of Appeal, July 2019'],['Result','Conviction quashed; acquittal entered; released after about 12 years']],
  story:[
    'In 2002, underworld figure Victor Peirce was shot dead in his car in Port Melbourne. Faruk Orman was later charged with murder, accused of being the getaway driver.',
    'Orman\'s barrister was Nicola Gobbo. What nobody outside Victoria Police knew was that Gobbo was also a registered police informer — later known publicly as "Lawyer X" — passing on information about her own clients.',
    'The key witness against Orman was another of Gobbo\'s clients. When that witness wavered about giving evidence, Gobbo contacted police and encouraged them to talk to him. He went on to testify.'
  ],
  court:[
    'In 2009, a Supreme Court [[jury|jury]] found Orman guilty of murder. He was sentenced to 20 years\' imprisonment, with a non-parole period of 14 years. His attempts to appeal failed, including in the High Court.',
    'After Gobbo\'s role became public, Orman petitioned the Attorney-General, who referred his case to the [[courtofappeal|Court of Appeal]].',
    'In July 2019, the Director of Public Prosecutions conceded there had been a substantial miscarriage of justice. The Court of Appeal agreed: Gobbo\'s conduct was a fundamental breach of her duties to her client and to the court, and it undermined Orman\'s right to a fair trial. The conviction was quashed. Because he had already served around 12 years, a retrial was considered unjust, and an acquittal was entered.',
    'The wider scandal led to the [[royalcommission|Royal Commission into the Management of Police Informants]].'
  ],
  why:[
    'This case shows why [[duty|lawyers\' duties]] matter so much. The whole adversary system assumes each side has someone genuinely on their side. If your own lawyer is working against you, the process is not [[fairness|fair]] — however strong the evidence looks.',
    'It is a powerful example of [[appeals|appeals]] correcting an error — but only after years in prison, and only because the truth came out.',
    'Notice the court did not decide Orman was innocent of the facts. It decided the trial was so unfair that the conviction could not stand. That is the [[presumption|presumption of innocence]] at work: without a fair trial, guilt is not proven.'
  ],
  think:[
    {q:'Why was it enough that the trial was unfair — without the court deciding whether Orman actually did it?', a:'A conviction is only valid if guilt is proven beyond reasonable doubt through a fair trial. A fundamental unfairness means guilt has not been properly proven, so the presumption of innocence applies.'},
    {q:'Which principle of justice is most clearly at stake here, and why?', a:'Fairness — particularly participation and impartiality. Orman could not genuinely participate when his own lawyer was secretly helping the prosecution\'s side.'}
  ],
  sources:['Orman v The Queen [2019] VSCA 163','Royal Commission into the Management of Police Informants (Victoria), 2018–2020']
},

/* ------------------------------------------------------------ */
{ id:'bourke', type:'Criminal', year:'2017–2019', where:'Supreme Court of Victoria',
  title:'The Bourke Street sentencing',
  tagline:'How does a judge sentence one of the worst crimes in Victoria\'s history?',
  concepts:['purposes','denunciation','protection','imprisonment','aggravating','mitigating','vis','jury','presumption'],
  glance:[['Who','James Gargasoulas, offender'],['Offence','Drove a car into pedestrians in Bourke Street Mall, January 2017'],['Harm','Six people killed, 27 injured'],['Trial','Supreme Court jury, November 2018 — guilty'],['Sentence','Life imprisonment; non-parole period of 46 years (February 2019)']],
  story:[
    'On 20 January 2017, James Gargasoulas drove a stolen car down the footpath and into the crowded Bourke Street Mall in central Melbourne at lunchtime. Six people were killed, including two children, and 27 were injured.',
    'Earlier that morning he had stabbed his brother, and police had been following him for hours. He was in a drug-induced psychosis at the time.',
    'This case contains distressing content. It is included because it shows sentencing principles operating in a real, very serious case.'
  ],
  court:[
    'Gargasoulas pleaded not guilty. That was his right — the [[presumption|presumption of innocence]] means the prosecution must prove its case. In November 2018, a Supreme Court [[jury|jury]] found him guilty of six counts of murder and 27 counts of recklessly endangering life, after deliberating for less than an hour.',
    'At the plea hearing, family members and survivors gave [[vis|victim impact statements]] describing the devastating effects of the crime.',
    'In February 2019, Justice Mark Weinberg imposed [[imprisonment|life imprisonment]] with a non-parole period of 46 years. He described the crime as one of the worst examples of mass murder in Australian history and found that Gargasoulas knew what he was doing.',
    'The prosecution had argued for no parole at all. The judge set a non-parole period partly because of Gargasoulas\'s serious mental illness, which would make prison harder for him. Some victims\' families said publicly that the sentence was not harsh enough.'
  ],
  why:[
    'A sentence like this serves several [[purposes|purposes of sanctions]] at once — especially [[denunciation|denunciation]], punishment and [[protection|protection]] of the community. Ask: how much can rehabilitation matter here?',
    '[[aggravating|Aggravating factors]] were overwhelming: multiple deaths, vulnerable victims including children, and a long prior record. The judge also did not accept that Gargasoulas was genuinely remorseful.',
    'Even so, his mental illness worked as a [[mitigating|mitigating factor]] on the non-parole period. That is a good example of a judge weighing <i>all</i> the factors, not just the most obvious ones.',
    'Notice also: his not-guilty plea was <b>not</b> treated as aggravating. He just didn\'t get the reduction a guilty plea can bring.'
  ],
  think:[
    {q:'Why might the judge consider an offender\'s serious mental illness even after a crime this serious?', a:'Mental illness can make imprisonment more burdensome for the offender, and can reduce the weight given to general deterrence. Courts must consider all relevant factors, even when the crime is extremely serious.'},
    {q:'Victims\' families said the sentence wasn\'t harsh enough. Does a victim impact statement decide the sentence?', a:'No. The judge considers the harm described in victim impact statements, but weighs it with all the other factors. The sentence is the judge\'s decision.'}
  ],
  sources:['Supreme Court of Victoria, sentencing of James Gargasoulas, February 2019','ABC News, 21–22 February 2019; SBS News, 22 February 2019']
},

/* ------------------------------------------------------------ */
{ id:'wilson', type:'Civil', year:'2015–2018', where:'Supreme Court → Court of Appeal',
  title:'Rebel Wilson v Bauer Media',
  tagline:'A record defamation win — and why most of it disappeared on appeal.',
  concepts:['civiljury','damages','compensatory','remedypurpose','appeals','courtofappeal','burden','standard','plaintiff'],
  glance:[['Plaintiff','Rebel Wilson, actor'],['Defendant','Bauer Media (publisher of Woman\'s Day and other magazines)'],['Claim','Defamation, over articles published in 2015'],['Trial','Supreme Court of Victoria — jury found for Wilson (2017)'],['Damages','$4.57 million awarded → reduced to $600,000 on appeal (2018)']],
  story:[
    'In 2015, magazines owned by Bauer Media published articles claiming actor Rebel Wilson had lied about her age, her real name and details of her childhood — in effect, calling her a serial liar.',
    'Wilson sued for defamation in the [[supremecourt|Supreme Court of Victoria]]. As the [[plaintiff|plaintiff]], she bore the [[burden|burden of proof]], and had to prove her case on the [[standard|balance of probabilities]].'
  ],
  court:[
    'In 2017, a [[civiljury|civil jury]] found that the articles were defamatory and rejected Bauer\'s defences.',
    'The trial judge, Justice John Dixon, then assessed [[damages|damages]]. He awarded $650,000 in general damages (including extra for Bauer\'s aggravating conduct) plus about $3.9 million for economic loss — film roles he found Wilson had lost because of the articles. The total, about $4.57 million, was the largest defamation award in Australian history at the time.',
    'Bauer [[appeals|appealed]] — not against the jury\'s finding, but against the amount. In June 2018, the [[courtofappeal|Court of Appeal]] found there was no proper basis in the evidence for the economic loss award and set it aside entirely. It reduced general damages to $600,000.',
    'Wilson sought to take the case further to the High Court, but the High Court refused to hear it.'
  ],
  why:[
    'This is a clear example of the [[civiljury|civil jury]] and the judge sharing the work: the jury decided whether Wilson was defamed; the judge decided how much she should receive.',
    'It shows the difference between kinds of [[compensatory|compensatory damages]]: <b>specific</b> damages for calculable financial loss (lost roles) and <b>general</b> damages for harm like hurt and damage to reputation. Specific losses must be <i>proved</i> — and that is where Wilson\'s claim failed on appeal.',
    'It also shows [[appeals|appeals]] at work on a remedy, not on liability. Wilson still won; she just won far less.'
  ],
  think:[
    {q:'Wilson won the case but lost most of her damages. Did the remedy still achieve its purpose?', a:'Partly. General damages compensated for harm to her reputation and feelings, and vindicated her publicly. But if she really did lose income, the appeal means that loss was not compensated — so restoration may be incomplete.'},
    {q:'Why might a defendant appeal only against the amount of damages, not the finding of liability?', a:'An appeal must be based on an error. Bauer may have judged that the jury\'s finding was hard to challenge, while the economic loss calculation had weak evidence behind it.'}
  ],
  sources:['Wilson v Bauer Media Pty Ltd [2017] VSC 521','Bauer Media Pty Ltd v Wilson (No 2) [2018] VSCA 154','ABC News, 13 June 2018']
},

/* ------------------------------------------------------------ */
{ id:'blacksaturday', type:'Civil', year:'2009–2016', where:'Supreme Court of Victoria',
  title:'The Black Saturday class action',
  tagline:'Thousands of bushfire victims, one case, and Australia\'s largest class action settlement.',
  concepts:['classaction','settlement','supremecourt','casemanagement','civilcosts','access','equality','royalcommission','damages'],
  glance:[['Event','Kilmore East–Kinglake bushfire, 7 February 2009'],['Harm','119 people killed; more than 1,000 homes destroyed'],['Lead case','Matthews v SPI Electricity & Ors'],['Defendants','Power company SP AusNet, its asset manager, and Victorian State parties'],['Result','Settled for about $494.7 million, approved December 2014']],
  story:[
    'On Black Saturday, 7 February 2009, catastrophic bushfires swept across Victoria. The Kilmore East–Kinglake fire alone killed 119 people, injured more than 1,000, and destroyed or badly damaged more than 1,770 homes and properties.',
    'The Victorian Bushfires [[royalcommission|Royal Commission]] later found the Kilmore East fire was started by an ageing power line.',
    'Thousands of people had lost family members, homes, businesses and livelihoods. Most could never have afforded to sue a large power company on their own.'
  ],
  court:[
    'A [[classaction|class action]] was brought in the [[supremecourt|Supreme Court of Victoria]] on behalf of about 10,000 people, with a lead plaintiff named Matthews. The defendants included the power distributor SP AusNet, its asset manager, and Victorian State parties (including Victoria Police and the CFA).',
    'In 2014 the parties reached a [[settlement|settlement]] of about $494.7 million — without any admission of liability. Because it was a class action, the court had to approve the settlement. Justice Robert Osborn approved it in December 2014, describing it as within the range of reasonable settlements.',
    'A separate class action over the Murrindindi fire settled in 2015 for $300 million. After legal and administration costs were deducted, about $698.5 million was distributed to claimants in the two cases — almost eight years after the fires.'
  ],
  why:[
    'This is the textbook example of what [[classaction|class actions]] are for: improving [[access|access]] for people who couldn\'t sue alone, and evening up the power imbalance against well-resourced defendants — [[equality|equality]].',
    'It shows the court\'s [[casemanagement|case management]] role on a massive scale. The court said that if the cases hadn\'t settled, it might have needed to hear thousands of individual claims — potentially taking years.',
    'And it shows the limits: [[civilcosts|costs and time]]. Deductions were taken from the settlement, and victims waited years for payment.'
  ],
  think:[
    {q:'The settlement was made "without admission of liability". Why would a defendant settle without admitting fault?', a:'To avoid the cost, uncertainty and length of a trial, and the risk of a larger judgment — while not having a court formally find them responsible.'},
    {q:'Why must a court approve a class action settlement, when other civil settlements are private?', a:'Group members don\'t run the case themselves, so the court protects their interests by checking the settlement is fair and reasonable for the whole group.'}
  ],
  sources:['Matthews v AusNet Electricity Services Pty Ltd [2014] VSC 663','Supreme Court of Victoria media release, 7 December 2016','ABC News, 22 December 2014']
},

/* ------------------------------------------------------------ */
{ id:'lacrosse', type:'Civil', year:'2014–2019', where:'VCAT',
  title:'The Lacrosse tower fire',
  tagline:'A cigarette, flammable cladding, and a multi-million-dollar VCAT decision.',
  concepts:['vcat','damages','compensatory','plaintiff','remedypurpose','civilcosts'],
  glance:[['Event','Fire at the 21-storey Lacrosse apartment tower, Docklands, November 2014'],['Applicants','211 apartment owners'],['Respondents','The builder, building surveyor, architect, fire engineer and others'],['Decided by','VCAT (Building and Property List), February 2019'],['Result','Builder ordered to pay about $5.7 million; consultants to cover 97% of it']],
  story:[
    'Late one night in November 2014, a resident of the Lacrosse apartment tower in Melbourne\'s Docklands left a cigarette in a plastic container on his eighth-floor balcony. A fire started — and raced up the building\'s exterior cladding to the roof of the 21-storey tower in minutes.',
    'About 400 people were evacuated safely. But the damage was extensive, and the cause of the rapid spread was clear: aluminium composite panels with a flammable core.',
    'The owners wanted to know who should pay for the damage and for replacing the cladding.'
  ],
  court:[
    '211 owners brought proceedings in [[vcat|VCAT]] against eight respondents, including the builder, the building surveyor, the architect, the fire engineer and the resident.',
    'In February 2019, Judge Woodward found the builder, LU Simon, had breached warranties implied into its building contract — including that materials would be suitable and comply with the law — and ordered it to pay about $5.7 million in [[damages|damages]].',
    'But the tribunal then shared the responsibility. It ordered the fire engineer (39%), the building surveyor (33%) and the architect (25%) to reimburse the builder — 97% in total. The remaining 3% was attributed to the resident who left the cigarette.'
  ],
  why:[
    'VCAT is often thought of as the place for small tenancy or consumer disputes. This case shows it also resolves large, complex, technical disputes — using members with expertise in building law.',
    'Like any [[vcat|VCAT]] order, the decision was binding. Compare that with Consumer Affairs Victoria, which cannot make binding decisions.',
    'The [[compensatory|compensatory damages]] aimed to restore the owners — to pay for repairs and replacing dangerous cladding. Ask: does restoration cover everything they lost, such as stress and disruption?'
  ],
  think:[
    {q:'The 2024 exam asked whether VCAT is "always" the most appropriate institution. How does this case help you answer?', a:'It shows VCAT can handle complex, high-value disputes and make binding orders. But it also had eight parties and technical evidence — some might argue a court, with full appeal rights and the ability to set precedent, could be more appropriate.'},
    {q:'Why might the owners have preferred VCAT to a court?', a:'Generally lower cost and less formality, a specialist list for building disputes, and a binding, enforceable outcome.'}
  ],
  sources:['Owners Corporation No.1 of PS613436T v LU Simon Builders Pty Ltd [2019] VCAT 286','K&L Gates case note, 25 March 2019; Gowling WLG case note, 8 March 2019']
}

];
