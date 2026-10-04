const topics = [
  {title:'Question Words',short:'Questions',note:'A Greek question mark looks like a semicolon: ;',rows:[['Τι','tee','What'],['Πού','poo','Where'],['Πότε','POH-teh','When'],['Πώς','pohs','How'],['Γιατί','yah-TEE','Why'],['Ποιος','pyos','Who'],['Πόσο','POH-soh','How much / how many']],example:['Πού είναι ο καφές;','Where is the coffee?']},
  {title:'Essential Verbs',short:'Verbs',note:'These are present-tense “I” forms. You can leave out εγώ (I).',rows:[['είμαι','EE-meh','I am'],['έχω','EH-hoh','I have'],['θέλω','THEH-loh','I want'],['κάνω','KAH-noh','I do / make'],['πάω','PAH-oh','I go'],['μπορώ','boh-ROH','I can'],['ξέρω','KSEH-roh','I know']],example:['Θέλω έναν καφέ.','I want a coffee.']},
  {title:'Everyday Phrases',short:'Phrases',note:'Παρακαλώ means both “please” and “you’re welcome.”',rows:[['Γεια','yah','Hi / bye'],['Ευχαριστώ','ef-hah-ree-STOH','Thank you'],['Παρακαλώ','pah-rah-kah-LOH','Please / you’re welcome'],['Συγγνώμη','see-GHNOH-mee','Sorry / excuse me'],['Ναι','neh','Yes'],['Όχι','OH-hee','No'],['Δεν καταλαβαίνω','then kah-tah-lah-VEH-noh','I don’t understand']],example:['Γεια σας!','Hello! (polite or plural)']},
  {title:'Numbers & Time',short:'Numbers',numbers:[['ένα','EH-nah'],['δύο','THEE-oh'],['τρία','TREE-ah'],['τέσσερα','TEH-seh-rah'],['πέντε','PEN-deh'],['έξι','EK-see'],['επτά','ep-TAH'],['οκτώ','ok-TOH'],['εννέα','eh-NEH-ah'],['δέκα','THEH-kah']],rows:[['σήμερα','SEE-meh-rah','Today'],['αύριο','AV-ree-oh','Tomorrow'],['χθες','hthes','Yesterday'],['τώρα','TOH-rah','Now'],['πρωί','proh-EE','Morning'],['βράδυ','VRAH-thee','Evening / night']],example:['Αύριο το πρωί.','Tomorrow morning.']},
  {title:'Directions & Place',short:'Directions',note:'Pair a direction with είναι (is): Είναι εδώ. — It’s here.',rows:[['εδώ','eh-THOH','Here'],['εκεί','eh-KEE','There'],['μέσα','MEH-sah','Inside'],['έξω','EK-soh','Outside'],['πάνω','PAH-noh','Up / above'],['κάτω','KAH-toh','Down / below'],['δεξιά','thek-SYAH','Right'],['αριστερά','ah-rees-teh-RAH','Left']],example:['Πού είναι; Δεξιά.','Where is it? To the right.']}
];
const nav = document.querySelector('.tabs');
const sheet = document.querySelector('#sheet');
nav.innerHTML = topics.map((t,i)=>`<button role="tab" id="tab-${i}" aria-controls="sheet" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-index="${i}"><span class="long-label">${t.title}</span><span class="short-label">${t.short}</span></button>`).join('');
function select(index,focus=false){
  const t=topics[index];
  nav.querySelectorAll('button').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;if(focus&&i===index)b.focus();});
  sheet.setAttribute('aria-labelledby',`tab-${index}`);
  sheet.className=t.numbers?'numbers-sheet':'';
  sheet.innerHTML=`<div class="sheet-heading"><h2>${t.title}</h2></div><div class="content">${t.numbers?`<div class="number-grid">${t.numbers.map((n,i)=>`<div class="number"><span class="digit">${i+1}</span><div><strong lang="el">${n[0]}</strong><small>${n[1]}</small></div></div>`).join('')}</div>`:''}<div class="word-table"><div class="table-labels"><span>GREEK</span><span>PRONUNCIATION</span><span>MEANING</span></div>${t.rows.map(r=>`<div class="word-row"><strong lang="el">${r[0]}</strong><span class="pronunciation">${r[1]}</span><span class="meaning">${r[2]}</span></div>`).join('')}</div></div><div class="sheet-bottom">${t.note ? `<p class="tip"><span>NOTE</span>${t.note}</p>` : ''}<div class="example"><span>EXAMPLE</span><strong lang="el">${t.example[0]}</strong><p>${t.example[1]}</p></div></div>`;
}
nav.addEventListener('click',e=>{const b=e.target.closest('button');if(b)select(Number(b.dataset.index));});
nav.addEventListener('keydown',e=>{const keys=['ArrowRight','ArrowLeft','Home','End'];if(!keys.includes(e.key))return;e.preventDefault();const current=Number(e.target.closest('button').dataset.index);select(e.key==='Home'?0:e.key==='End'?4:(current+(e.key==='ArrowRight'?1:4))%5,true);});
select(0);
