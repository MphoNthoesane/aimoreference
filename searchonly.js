let availableKeywords = [
    //South African
    'FA - South African Location Indicator',
    'FAAB - Alexander Bay','FAAG - Aggeneys','FAAN - Aliwal North','FAAP - Aviators Paradise','FAAL - Alldays','FAAD - Adelaide','FAAE - Aberdeen','FAAR - Arathusa Safari Lodge',
    'FABA - Microland Flight Park','FABB - Brakpan','FABD - Burgersdorp','FABE - Bhisho','FABL - Braam Fischer (Bloemfontein International)','FABM - Bethlehem','FABO - Bothaville','FABS - Brits','FABP - Black Rock','FABV - Butterworth','FABW - Karoo Gateway',
    'FACA - Cape Town FIR','FACC - Chitwa Chitwa','FACD - Cradock','FACE - Ceres','FACF - St Francis Field','FACH - Cookhouse','FACN - Carnavon','FACO - Alkantpan','FACR - Carletonville','FACT - Cape Town','FACV - Calvinia',
    'FADA - De Aar','FADB - Dwaalboom','FADL - Delareyville','FADO - Dendron','FADP - Darlington Dam','FADX - Delta 200','FADQ - Phinda','FADK - Dukuduku',
    'FAEC - Umtshezi Municipality','FAEL - King Phalo (East London)','FAEM - Empangeni','FAEO - Ermelo','FAER - Ekland Ranch','FAES - Eshowe',
    'FAFB - Ficksburg','FAFO - Fort Beaufort','FAFW - Freeway',
    'FAGC - Grand Central','FAGG - George','FAGL - Groblersdal','FAGM - Rand','FAGR - Graaff Reinet','FAGT - Grahamstown','FAGY - Greytown',
    'FAHC - Howick','FAHG - Heidelburg','FAHI - Halweg','FAHJ - Harding','FAHL - Hluhluwe','FAHR - Harrismith','FAHS - Hoedspruit SAAF(Military)','FAHT - Hoedspruit Civil','FAHU - HMS Bastard Memorial','FAHV - Gariep Dam',
    'FAIS - Isithebe','FAIW - Ingwelala',
    'FAJA - Johannesburg FIR','FAJC - Jackalberry','FAJK - Jan Kemp Dorp','FAJO - Johannesburg Oceanic','FAJP - Joubertina',
    'FAKD - Klerksdorp','FAKM - Kimberley','FAKN - Kruger Mpumalanga','FAKP - Komatipoort','FAKR - Krugersdorp','FAKS - Kroonstad','FAKT - Kitty Hawk Aero Estate','FAKU - Kuruman','FAKZ - Kleinsee',
    'FALA - Lanseria','FALF - Loeriesfontein','FALC - Lime Acres','FALD - Londolozi','FALE - King Shaka(La Mercy)','FALI - Lichtenburg','FALL - Lydenburg','FALO - Louis Trichardt (Civil)','FALM - Makhado AFB','FALW - Langebaanweg SAAF','FALY - Ladysmith',
    'FAMB - Middelburg (Mpumalanga)','FAMC - Middelburg (Eastern Cape)','FAMD - Malamala','FAMG - Margate','FAMI - Marble Hall','FAMJ - Majuba Power Station','FAMK - Madikwe Game','FAMM - George Dick Montshioa','FAMN - Malelane','FAMO - Mossel Bay','FAMP - Madimbo','FAMS - Morning Side','FAMU - Mkuzi',
    'FANC - New Castle','FANS - Nelspruit','FANY - Nylstroom',
    'FAOB - Overberg','FAOH - Oudtshoorn','FAOI - Orient','FAOR - OR Tambo',
    'FAPA - Port Alfred','FAPE - Chief David Stuurman (Port Elizabeth)','FAPF - Piet Retief','FAPG - Plettenberg Bay','FAPH - Phalaborwa','FAPI - Pietersburg','FAPL - Pongola','FAPM - Pietermaritzburg','FAPN - Pilanesburg','FAPO - Pilgrims Rest','FAPP - Polokwane International','FAPS - Potchefstroom','FAPT - Postmasburg','FAPX - Paradise Beach','FAPY - Parys','FAPK - Prieska','FAPZ - Progress','FAPJ - Post St Johns',
    'FAQT - Queenstown','FAQR - Potgietersrus','FAQF - Pomfret',
    'FARB - Richards Bay','FARI - Reivilo','FARS - Robertson','FARG - Rustenburg',
    'FASB - Springbok','FASC - Secunda','FASD - Saldhana','FASE - Sabi Sabi','FASG - Schweizer Reneke','FASH - Stellenbosch','FASI - Springs','FASK - Swartkop','FASL - Sutherland','FASP - Singita','FASS - Sishen','FAST - Somerset East','FASX - Swellendam','FASZ - Skukuza',
    'FATA - Tadder Field','FATD - Rock Fig (Tanda Tula)','FATF - Tommys Field','FATG - Thabo Tholo','FATH - Thohoyandou','FATI - Thabazimbi','FATK - Tsitsikama','FATM - Stutterheim','FATN - Thaba Nchu','FATP - New Tempe','FATT - Tutuka Power Station','FATW - Tswalu Game Reserve','FATZ - Tzaneen',
    'FAUH - Uitenhage','FAUL - Ulundi-Prince Mangosuthu Buthelezi','FAUP - Upington','FAUS -Ulusaba ','FAUT - Mthatha',
    'FAVB - Vryburg','FAVG - Virginia','FAVM - Venetia Mine','FAVR - Vredendal','FAVV -Vereeniging ','FAVW - Victoria West','FAVY - Vryheid',
    'FAWA - Warmbaths','FAWB- Wonderboom','FAWC - Worcester','FAWI - Witbank','FAWL - Williston','FAWM - Welkom','FAWO - Willowmore','FAWK - Waterkloof SAAF','FAWT - Winterveldt Mine','FAWN - Cape Winelands',
    'FAYP - Ysterplaat  Military',
    'FAZR - Zeerust','FAZG - Swartberg',

    //Neighbouring Countries
    'FD - ESWATINI Location Indicator','FDMS - Manzini / Matsapha','FDSK - King Mswati III (Sikhuphe) International',
    'FX - Lesotho Location Indicator','FXMM - Maseru/Moshoeshoe International','FXMU - Maseru/Mejametalana',
    'FQ - Mozambique Location Indicator','FQBE - Beira FIR','FQMA - Maputo','FQNC - Nacala','FQNP - Nampula','FQVL - Vilankulo','FQPB - Pemba','FQQL - Quelimane','FQBR - Beiria','FQIN - Inhambane','FQFN - Filipe Jacinto Nyusi/ XAI XAI (FQXA)',
    'FV - Zimbabwe Location Indicator','FVHF - Harare FIR','FVBB - Beitbridge','FVJN - Joshua Nkomo (Bulawayo)','FVCP - Charles Prince','FVCZ - Chiredzi/Buffalo Range','FVFA - Victoria Falls','FVGW - Gweru','FVRG - Robert Mugabe (Harare International)','FVKB - Kariba','FVMC - Hwange/Main Camp','FVMU - Mutare','FVMV - Masvingo','FVWN - Hwange National Park',
    'FB - Botswana Location Indicator','FBGR - Gaborone FIR','FBPM - Francistown/P G Matante','FBGZ - Ghanzi','FBJW - Jwaneng','FBKE - Kasane','FBLV - Limpopo Valley','FBMN - Maun','FBOR - Orapa','FBSK - Sir Seretse Khama','FBSN - Sua Pan','FBSP - Selibe-Phikwe',
    'FY - Namibia Location Indicator','FYGB - Gobabis','FYGF - Grootfontein','FYKM - Katima Mulilo','FYKT - Keetmanshoop','FYLZ - Luderitz','FYOA - Ondangwa','FYRU - Rundu','FYSA - Skorpion','FYSM - Swakopmund','FYTR - Twee Rivieren','FYWB - Walvisbay','FYWE - Windhoek Eros','FYWH - Hosea Kutako Intl (Windhoek)',
    //African
    'DA - Algeria','DAAA - Alger(ACC)','DAAG - Alger/Houari Boumediene','DB - Benin','DBBB - Cardinale Bernardin Gantin de Cadjehoun International','DF - Burkina Faso','DFFD - Ouagadougou', 'DG - Ghana','DGAA - Accra/Kotoka International',"DI - Cote'd Ivoir",'DIAP - Abidjan','DN - Nigeria','DNAA - Abuja','DNKN - Kano','DNMM - Lagos','DNPO - Port Harcourt',
    'DT - Tunis','DTTA - Tunis','DTTJ - Djerba','DX - Togo','DXXX - Lome',
    'FC - Congo','FCBB - Brazzaville/Maya-Maya','FCPP - Point Noire','FH - Ascension I (United Kingdom)','FHAW - Ascension','FHSH - St Helena','FI - Mauritius','FIMP - Sir Seewoosagur Ramgoolam International Airport','FK - Cameroon','FKKD - Douala',
    'FL - Zambia','FLHN - Harry Nkamula','FLKK - Kenneth Kaunda','FKND - Ndola','FLLC - Lusaka City','FM - Comoros','FMCH - Moroni','FM - Madagascar','FMMI - Antananarivo','FMST - Toliara','FM - Reunion(France)','FMEE - Saint Denis Gillot',
    'FN - Angola','FNLU - Luanda','FNCA - Maria Mambo Cafe','FNGI - 11 De Novembro','FNMO - Welwitschia Mirabilis','FNUB - Mukanka','FO - Gabon','FOOL - Libreville',
    'FP - Sao Tome','FPST - Sao Tome International','FS - Seychelles','FSIA - Seychelles International Airport','FW - Malawi','FWCL - Blantyre (Chileka)','FWKA - Karonga','FWKI - Lilongwe/Kamuzu International','FZ - Democratic Republic of Congo','FZAA - Kinshasa (N Djili)','FZQA - Lubumbashi',
    'GA - Mali','GABS - Bamako/Senou','GB - Gambia','GBYD - Banjul International','GC - Canary Islands (Spain)','GCLP - Gran Canaria','GF - Sierra Leone','GFLL - Freetown','GG - Guinea-Bissau','GGOV - Bissau/Oswaldo Vieiria International',
    'GL - Liberia','GLRB - Monrovia/Roberts International','GM - Morocco','GMMN - Casablanca/Mohammed V','GO - Senegal','GOOY - Dakar','GQ - Mauritania','GS - Western Sahara','GU - Guinea','GV - Cape Verde','GVAC - Amilcar Cabral/Sal Island',
    'HA - Ethiopia','HAAB - Addis Ababa','HB - Burundi','HBBA - Bujumbura','HC - Somalia','HCMH - Egal International Airport','HCMM - Mogadishu','HD - Djibouti','HDAM - Djibouti/Ambouli',
    'HE - Egypt','HEAL - Al Alamain International','HEAR - El Arish International','HEAT - Asyut International','HEAX - Alexandria International','HECA - Cairo International','HH - Eritrea','HHAS - Asmara','HK - Kenya','HKEL - Eldoret International Airport','HKJK - Nairobi/Jomo Kenyatta International','HKMA - Mombasa',
    'HL - Libia','HLLT - Tripoli International','HR - Rwanda','HRYR - Kigali','HS - Sudan','HSSS - Khartouna','HT - Tanzania','HTDA - Dar Es-Salaam/Julius Nyerere International','HTDC - Dar Es-Salaam ACC/FIR/RCC','HTKJ - Kilimanjaro','HTZA - Zanzibar','HU - Uganda','HUEC - Entebbe',

    //International
    'EB - Belgium','EBAW - Antwerp','EBBR - Brussels','ED - Germany','EDDF - Frankfurt','EDDI - Berlin','EDDM - Munchen','EG - United Kingdom','EGKK - London Gatwick','EGLL - London Heathrow','EGPF - Glasgow','EH - The Netherlands','EHAM - Amsterdam','EHRD - Rotterdam','EI - Ireland','EIDW - Dublin',
    'EK - Denmark','EKCH - Copenhagen','EL - Luxembourg','ELLX - Luxembourg','EN - Norway','ENGM - Oslo','EP - Poland','EPWA - Warsaw','ES - Sweden','ESKN - Stockholm/Skavsta','ESSA - Stockholm/Arlanda',
    'K - United States','KATL - Atlanta','KIAD - Washington','KJFK - New York/JFK','KEWR - Newark Liberty International',
    'LB - Bulgaria','LBSF - Sofia','LD - Spain','LEMD - Madrid','LF - France','LFPG - Paris-Charles de Gaulle','LG - Greece','LGAV - Athinal (Athens)','LI - Italy','LIMC - Milano','LIRA - Rome/Ciampino','LIRF - Rome/Fiumicino',
    'LL - Israel','LLBG - Tev-Aviv','LP - Portugal','LPPT - Lisbon','LS - Switzerland','LSGG - Geneva','LSZH - Zurich','LT - Turkey','LTBA - Istanbul',
    'OB - Bahrain','OBBI - Bahrain International','OE - Saudi Arabia','OEJN - Jeddah/King Abdulahziz International','OM - United Arab Emirates','OMAA - Abu Dhabi','OMDB - Dubai International','OT - Qatar','OTBD - Doha International','OTHH - Hamad International',
    'SA - Argentina','SAEZ - Ezeiza Ministro Pistarini (Buenos Aires)','SB - Brazil','SBGL - Rio De Janeiro','SBGR - Guarulhos','SBJH - Sao Paulo',
    'VA - India','VABB - Mumbai','VC - Sri Lanka','VCBI - Bandaranaike International Airport Colombo','VE - India','VECC - Kolkata','VH - Hong Kong','VHHH - Hong Kong International','VI - India','VIDD - Delhi','VO - India','VOBL - Bangalore International','VOMM - Chennai','VT - Thailand','VTBD - Bangkok International Airport',
    'WI - Indonesia','WIII - Jakarta Intl','WM - Malaysia (Peninsular)','WMKK - Sepang/Kl International Airport','WMSA - Subang','WS - Singapore','WSSS - Singapore','Y - Australia','YPPH - Perth','YSSY - Sydney','Z - China','ZBAA - Beijing',

    //FIRs
    'DAAA - Algeria FIR','DBBB - Benin FIR','DGAC - Ghana FIR','DNKK - Nigeria - Kano FIR','DRRR - Niger FIR','DTTC - Tunis FIR','DXXX - Toga FIR',
    'FAJA - South Africa - Johannesburg FIR','FACA - South Africa - Cape Town FIR','FAJO - South Africa - Oceanic FIR',
    'FBGR - Botswana FIR','FCCC - Congo FIR','FAJA - Eswatini FIR','FEFF - Central African Republic FIR','FHAW - Ascension FIR','FIMM - Mauritius FIR','FKKD - Cameroon FIR','FLFI - Zambia FIR','FMMM - Madagascar FIR','FNAN - Angola FIR','FOOO - Gabon FIR','FPST - Sao Tome FIR','FQBE - Mozambique FIR','FSSS - Seychelles FIR','FTTT - Chad FIR','FVHF - Zimbabwe FIR','FWLL - Malawi FIR','FAJA - Lesotho FIR','FYWF - Namibia FIR','FZZA - Democratic Republic of Congo FIR',
    'GCCC - Canary Islands FIR','GMMM - Morocco FIR','GOOO - Senegal FIR','GVAC - Cape Verde FIR','GVSC - Cape Verde Oceanic FIR',
    'HAAA - Ethiopia FIR','HBBA - Burundi FIR','HCMM - Somalia FIR','HECA - Egypt FIR','HKNA - Kenya FIR','HLLT - Libya FIR','HRYR - Rwanda FIR','HSSS - Sudan FIR','HTDC - Tanzania FIR','HUEC - Uganda FIR',


    //South African Nav Aids
    'AGGENEYS - AGV','ALEXANDER BAY - ABV','BRAM FISCHER INTL AIRPORT - BLV','CALEDON - CDV','CAPE TOWN INTL AIRPORT - CTV','CERES - CSV','CHIEF DAVID STUURMAN - PEV','ELLISRAS - ERV','GEORGE AIRPORT - GRV','GEORGE DICK MONTSHIOA - MMV','GRASMERE - GAV','GREEFSWALD - GWV','GREYTOWN - GYV','HEIDELBERG - HGV','HOEDSPRUIT (MIL) - HSV','HOFMEYER - HMV','KIMBERLEY AIRPORT - KYV','KING PHALO - ELV','KING SHAKA - TGV','KRUGER MPUMALANGA - PKV',
    'LADYSMITH - LYV','LANGEBAANWEG (MIL) - LWV','LANSERIA AIRPORT - LIV','MAKHADO (MIL) - LTV','OR TAMBO INTL AIRPORT - JSV','OVERBERG (MIL) - OBV','PETRUSVILLE - PVV','PIETERMARITZBURG - PMV','PILANESBERG - PNV','POLOKWANE INTL - PPV','PORT ST JOHNS - PJV',
    'RAND - RAV','RICHARDS BAY - RBV','SISHEN - SSV','SOMERVELD - SVV','STANDERTON - STV','SUTHERLAND - SLV','ULUNDI - UL','UPINGTON AIRPORT - UPV','VICTORIA WEST - VWV','WARDEN - WRV','WATERKLOOF (MIL) - WKV','WELKOM - WMV','WITBANK - WIV','WONDERBOOM - DPV','ZONDERWATER - CZV',

    //African Nav Aids
    'FBSK - GRV/GSV','FBFT - FNV','FBKE - KSV','FBMN - MNV',
    'FYWF - WHV','FYWB - WBV','FYKT - KTV',
    'FQMA - VMA','FQBR - VBR','FQTT - VTZ','FQNC - NC','FQNP - VNP','FQQL - VQL','FQVL - VL',
    'FWKI - DVL','FWCL - VCL',
    'FNLU - VNA','FNUB - VUB','FNCA - VCA',
    'FLSK - VND','FLHN - VLI','FLKK - VLS',
    'HTDA - DV','HKJK - NV','HKMO - MOV','HKML - MLD',
    'FZAA - KSA','FZQA - LUB','FCBB - BZV','FCPP - IT','FKKD - DLA',
    'DNMM - LAG','DNKN - KAN','DNAA - ABC','HAAB - ADS','HRYR - KNM','HECA - CAI','FMMI - TNV','FMMT - MT',
    'FIMP - PLS','GOOY - YF','DGAA - ACC','HUEN - NN','FMEE - SDG','FPST - STM','FSIA - SEY','FHSH - SH',

    //Operating Agencies
    'ABB - AIR BELGIUM SA- AIR BELGIUM','AFR - AIR FRANCE - AIRFRANCE','AFZ - AFRICA FREIGHT SERVICES - AFREIGHT','AMD - SA RED CROSS AIR MERCY SERVICES - MERCY WING','APK - AIR PEACE LTD - PEACEBIRD','ARA - ARIK AIR LTD - ARIAIR','ASM - AWESOME FLIGHT SERVICES (PTY) LTD - AWESOME','AVQ - AVIX-INTERNATIONAL FLIGHT TRAINING ACADEMY - AVIQ','AZB - ZAMBIA AIRWAYS', 'AZW - AIR ZIMBABWE - AIR ZIMBABWE',
    'BAW - BRITISH AIRWAYS - SPEEDBIRD','BFY - BESTFLY AIRCRAFT MANAGEMENT - MWANGO BEST','BKT - TAB CHARTERS - BLACKTAIL','BOT - AIR BOTSWANA (PTY) LTD - BOTSWANA','BRH - STAR AIR CARGO - BRIGHTSTAR',
    'CCA - AIR CHINA - AIR CHINA','CLX - CARGOLUX AIRLINES INTERNATIONAL SA - CARGOLUX','CPA - CATHAY PACIFIC AIRWAYS - CATHAY','CEZ - CESSZANI AVIATION (PTY) LTD - CESSZANI','CFG - CONDOR FLUGDIENST GMBH - CONDOR','CAI - TURISTIK HAVA TASIMACILIK',
    'DAL - DELTA AIR LINES, INC - DELTA','DHV - DLH AVIATION (PTY) LTD - WORLDSTAR','DLH - DEUTSCHE LUFTANSA, A.G. - LUFTHANSA','DTA - TAAG, LIHNAS AEREAS DE ANGOLA (ANGOLA AIRLINES) - ANGOLA','DEN - DENEL AVIATION',
    'ELY - EL AL -ISRAEL AIRLINES LTD - ELAL','ETD - ETHIHAD AIRWAYS - ETIHAD','ETH - ETHIOPIAN AIRLINES CORPORATION - ETHOPIAN','EXD - EXECUJET AVIATION (PTY) LTD - PLATENUM','EDW - EDELWEIS AIR EG - EDELWEISS',
    'FDS - AFRICAN MEDICAL AND RESEARCH - FLYDOC','FDR - FEDERAL AIR (PTY) LTD -FEDAIR','FJW - FASTJET ZIMBABWE -ZIMBIRD','FLN - FLYNAMIBIA ','FSK - AFRICA CHARTER AIRLINES CC - AFRICAN SKY',
    'GBB - GLOBAL AVIATION OPERATIONS (PTY) LTD - GLOBE','GCM - COMAIR FLIGHT SERVICES PTY LTD - GLOBECOM','GRA - GUARDIAN AIR ASSET MANAGEMENT PTY LTD - FLEX','GWS - GENERAL AIRWAYS - GEN AIR',
    'JRH - HAC ZIMBABWE - BLUETIP','HFM -__-MOONRAKER',
    'KEM - CEMAIR PTY LTD - CEMAIR','KLM - ROYAL DUTCH AIRLINES - KLM','KQA - KENYA AIRWAYS LTD - KENYA','KYD - SKY MESSAGING',
    'LAM - LINHAS AEREAS DE 10 - MOCAMBIQUE','LMG - SOUTH AFRICAN AIR FORCE (SAAF) - SOUTH AFRICAN','LNK - SA AIRLINK (PTY) LTD - LINK','LTZ - LOUTZAVIA CHARTERS CC - LAMINAR',
    'MAU - AIR MAURITIUS LIMITED - AIRMAURITIUS','MCC - MCC AVIATION PTY LTD - DISCOVERY','MME - MULTIMEDIA ENTERTAINMENT GROUP AIR - MAJESTIC','MPH - MATINAIR HOLLAND N.V. - MARTINAIR','MWI - MALAWIAN AIRLINES - MALAWIAN','MSR - EGYPT AIR - EGYPTAIR','MXE - MOCAMBIQUE EXPRESSO - MOCAMBIQUE EXPRESS','MSI - MOTOR SICH',
    'OOT - OUT OF THE BLUE AIR SAFARIS (PTY) LTD - OOTBAS','OWE - OWEN AIR - OWENAIR','OPM - FIREBLADE AVIATION - OPTIMA',
    'PIU - 43 AIR SCHOOL - PRIMA','PFZ - PROFLIGHT AIR SERVICES LTD - PROFLIGHT ZAMBIA','PMX - PAMBELE AVIATION PTY LTD - PAMBELE',
    'QFA -  QANTAS AIRWAYS LIMITED - QANTAS','QTR - QATAR AIRWAYS COMPANY - QATARI',
    'REU - AIR AUSTAL - REUNION','RWD - RWANDAIR EXPRESS - RWANDAIR',
    'SAA - SOUTH AFRICAN AIRWAYS- SPRINGBOK - SPRINGBOK','SET - SOLENTA AVIATION (PTY) LTD - SOLENTA','SEY - AIR SEYCHELLES - SEYCHELLES','SFR - SAFAIR (PTY) LTD - SAFAIR','SKK - ASKY - ASKY AIRLINE','SIA - SINGAPORE AIRLINES LIMITED - SINGAPORE','SLE - STREAMLINE NAC - SLIPSTREAM','SRE - FLY JETSTREAM -STREAMJET','SVA - SAUDI ARABIAN AIRLINES - SAUDI','SXY - ABD SAFARI EXPRESS CARGO LTD - SAFARI EXPRESS','SWR - SWISS INTERNATIONAL AIR LINES LTD - SWISS','SYD - FLYING AMBULANCE PTY LTD T/A AEROCARE - SKY DOCTOR','SZL - SWAZILAND AIRLINK - SWAZILINK',
    'TAP - TRANSPORTES AEREOS PORTUGUESES, E.P. - AIR PORTUGAL','THY - TURKISH AIRLINES CO. - TURKAIR','TTN - ABSOLUTE FLIGHT SERVICES PTY LTD - TITANIUM','TAM - TAM-LINHAS AEREAS S.A - TAM',
    'UAE - UNITED ARAB EMIRATES - EMIRATES','UAL - UNITED AIRLINES INC (CHICAGO IL) - UNITED','UGD - UGANDA AIRLINES - CRESTERED','UNQ - UNIQUE AIRLINE CHARTER PTY LTD - UNIQUE',
    'VIR - VIRGIN ATLANTIC - VIRGIN','VJT - VISTA JET LTD - VISTA JET',"VRE - AIR COTE D'IVOIRE - COTE D'IVOIRE",
    'WAA - WESTAIR WING CHARTERS - WESTAIR WING S',

    //Aircraft Designators
    'A109 - Augusta A - 109','A310 - Airbus A-310 ','A319 - Airbus A-319','A320 - Airbus A-320','A321 - Airbus A-321 ','A332 - Airbus A-330-200','A333 - Airbus A-330-300','A342 - Airbus A-340-200','A343 - Airbus A-340-200','A344 - Airbus A-340-400','A345 - Airbus A-340-500','A346 - Airbus A-340-600','A388 - Airbus A-380-800',
    'AEST - Piper, Aerostar','AL03 - Aerospatiale Alouette 3','AN24 - Antonov, An-24','AS32 - Aerospatiale AS-332/532','AS50 - Aerospatiale AS-350/550','AS55 - Aerospatiale AS-355/555','AS65 - Aerospatiale AS-365/565','AT43 - Aerospatiale ATR-42-200/300/320','AT44 - Aerospatiale ATR-42-400','AT45 - Aerospatiale ATR-42-500','AT72 - Aerospatiale ATR-72',
    'B06 - Bell 206 JetRanger','B06T - Bell 206LT TwinRanger','B105 - Casa BO 105/Eurocopetr 105','B190 - Beech, 1900','B222 - Bell 222','B350 - Beech, 300 Super King Air 350','B427 - Bell 427','B461 - British Aerospace BAe-146/100','B462 - British Aerospace BAe-146/200','B462 - British Aerospace BAe-146/300','B60T - Beech, Royal Turbine Duke',
    'B722 - Boeing, 727-200','B732 - Boeing, 737-200','B733 - Boeing, 737-300','B734 - Boeing, 737-400','B735 - Boeing, 737-500','B736 - Boeing, 737-600','B737 - Boeing, 737-700','B738 - Boeing, 737-800','B742 - Boeing, 747-200','B743 - Boeing, 747-300','B744 - Boeing, 747-400','B748 - Boeing, 747-800','B753 - Boeing, 757-300','B763 - Boeing, 767-300','B773 - Boeing, 777-300',
    'B77W - Boeing, 777-300ER','B783 - Boeing, 787-3 Dreamliner','B788 - Boeing, 787-8 Dreamliner','BA11 - BAC, One Eleven',
    'BE10 - Beech, 100 King Air','BE17 - Beech, Staggerwing','BE20 - Beech, 200 Super King Air ','BE30 - Beech, 300 Super King Air','BE33 - Beech, 33 Bonanza','BE35 - Beech, 35 Bonanza','BE55 - Beech, 55 Baron','BE58 - Beech, 58 Baron','BE9L - Beech, 90 King Air','BE9T - Beech, King Air F90','BK17 - Casa BK117',
    'C130 - Lockheed, C-130 K Hercules','C141 - Lockheed, C-141 Starlifter', 'C152 - Cessna 152','C172 - Cessna 172','C180 - Cessna 180','C182 - Cessna 182','C206 - Cessna 206',
    'C208 - Cessna Grand Caravan','C210 - Cessna 210','C303 - Cessna T303 Crusader','C310 - Cessna 310, T310','C402 - Cessna 401,402','C404 - Cessna 404','C411 - Cessna 411','C414 - Cessna 414','C421 - Cessna 421',
    'C500 - Cessna Citation I','C501 - Cessna 501 (Single pilot)','C510 - Cessna, Citation Mustang','C525 - Cessna 525 Citation Jet','C550 - Cessna 550, 552 Citation II','C551 - Cessna 551 (Single pilot)','C560 - Cessna 560','C56X - Cessna 560 Exel','C72R - Cessna 172RG','C750 - Cessna 750 Citation X','C77R - Cessna 177RG','C82R - Cessna 182RG',
    'CRJ1 - CANADAIR, Regional Jet, RJ-100','CRJ2 - CANADAIR, Regional Jet, RJ-200','CRJ7 - CANADAIR, Regional Jet, RJ-700',
    'DC10 - Mcdonnell Douglas, DC-10','DC3 - Douglas, DC-3','DC85 - Mcdonnell Douglas, DC-8-50','DC86 - Mcdonnell Douglas, DC-8-60','DC87 - Mcdonnell Douglas, DC-8-70','DC91 - Mcdonnell Douglas, DC-9-10','DC92 - Mcdonnell Douglas, DC-9-20','DC93 - Mcdonnell Douglas, DC-9-30','DC94 - Mcdonnell Douglas, DC-9-40','DC95 - Mcdonnell Douglas, DC-9-50',
    'DH8A - De Havilland Canada DHC-8-100','DH8B - De Havilland Canada DHC-8-200','DH8C - De Havilland Canada DHC-8-300','DH8D - De Havilland Canada DHC-8-400',
    'E120 - Embraer, EMB-120 Brasillia ','E135 - Embraer, EMB-135 ','EC25 - Eurocopter EC-225','EC35 - Eurocopter EC-135','ECHO - TECNAM, Eaglet',
    'F27 - Fokker, F27 Friendship','F28 - Fokker, F28 Fellowship','FA10 - Dassault, Falcon 10/100','FA20 - Dassault, Falcon 200','FA50 - Dassault, Falcon 50','FA900 - Dassault, Falcon 900',
    'G159 - Grumman, G159, Gulfstream 1','GLEX - Bombardier Global Express','GLF2 - Grumman, Gulfstream 2','GLF3 - Grumman, Gulfstream 3','GLF4 - Grumman, Gulfstream 4','GLF5 - Grumman, Gulfstream 5',
    'H25A - De Havilland, DH-125','H25B - British Aerospace, BAe 125-700','H25C - British Aerospace, BAe 125-1000','H500 - McDonald Douglas MD 500 Nightfox','HAWK - BAE Systems, Hawk','IL76 - ILYUSHIN, II-76','J328 - Dornier, 328',
    'JAB2 - JABIRU, J160/170','JAB4 - JABIRU, J200/230/250/450','JABI - JABIRU, SK/SP/ST/LSA','JS31 - British Aerospace, Jetstream 31','JS41 - British Aerospace, Jetstream 41', 'K100 - Daher/Quest, Kodiak 100', 'LJ35 - Learjet, 35','LJ45 - Learjet, 45','LJ55 - Learjet, 55','LJ60 - Learjet, 60', 'Lynx - Westland, Lynx',
    'M20P - Mooney, M-20 C/C/E/G/J','M20T - Mooney, 231','M326 - Atlas, MB-326, Impala','MD11 - Mcdonnell Douglas, MD11','MD81 - Mcdonnell Douglas, MD81','MD82 - Mcdonnell Douglas, MD82','MD83 - Mcdonnell Douglas, MD83','MD87 - Mcdonnell Douglas, MD87','MD88 - Mcdonnell Douglas, MD88','MD90 - Mcdonnell Douglas, MD90','Mira - Atlas, Cheetah',
    'P28A - Piper, PA-28/140/150/160/180','P28B - Piper, PA-28/201T/235/236','P28R - Piper, PA-28R/180/200/201','P28T - Piper, PA-28RT/201/201T','P32R - Piper, PA-32R/300/301','P32T - Piper, PA-32RT/300/300T','P46T - Piper, PA-46-500TP',
    'PA12 - Piper, PA-12, Super Cruiser','PA14 - Piper, PA-14, Family Cruiser','PA15 - Piper, PA-15, Vagabond','PA16 - Piper, PA-16, Clipper','PA17 - Piper, PA-17, Vagabond','PA18 - Piper, PA-18, Super Cub',
    'PA20 - Piper, PA-20, Pacer','PA22 - Piper, PA-22, Caribbean','PA23 - Piper, PA-23-150/160, Apache','PA24 - Piper, PA-24, Comanche','PA25 - Piper, PA-25, Pawnee','PA27 - Piper, PA-23-235/250, Aztec ',
    'PA30 - Piper, PA-30, Twin Comanche','PA31 - Piper, PA-31-300/325/350, Navajo','PA32 - Piper, PA-32-6XT, Saratoga','PA34 - Piper, PA-34, Seneca','PA36 - Piper, PA-36, Pawnee Brave','PA38 - Piper, PA-38, Tomahawk',
    'PA44 - Piper, PA-44, Semihole','PA46 - Piper, PA-46, Malibu','PC12 - Pilatus, PC-12 Eagle','PC6T - Pilatus, PC-6 Heli Porter','PRM - Hawker Beechcraft Premier 1','Puma - Aerospatiale SA-330 Puma',
    'R22 - Robinson R-22, Mariner','R44 - Robinson R-44 ','S108 - Piper, 108 Voyager/Station Wagon','SR20 - Cirrus, SR-20','SR22 - SR22','T18 - Thorp, Tiger','ULAC - Ultralight, Microlight ACFT',


]

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
               return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>"; 
    })
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
