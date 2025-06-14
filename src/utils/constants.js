export const allOperators = {
  str_value: ["equals", "not equals to"],
  enum_variant: ["is", "contains", "is not", "not contains"],
  metadata_value: ["equals to"],
  number: ["equals to", "greater than", "less than"],
};

export const allKeys = [
  "payment_method",
  "card_bin",
  "card_type",
  "card_network",
  "pay_later",
  "gift_card",
  "mandate_acceptance_type",
  "mandate_type",
  "payment_type",
  "wallet",
  "upi",
  "voucher",
  "bank_transfer",
  "bank_redirect",
  "bank_debit",
  "crypto",
  "metadata",
  "reward",
  "amount",
  "currency",
  "authentication_type",
  "capture_method",
  "business_country",
  "billing_country",
  "business_label",
  "setup_future_usage",
  "card_redirect",
  "real_time_payment",
  "open_banking",
  "mobile_payment",
  "issuer_name",
  "issuer_country",
  "customer_device_platform",
  "customer_device_type",
  "customer_device_display_size",
  "acquirer_country",
  "acquirer_fraud_rate",
];

export const allKeyTypes = {
  payment_method: "enum_variant",
  card_bin: "str_value",
  card_type: "enum_variant",
  card_network: "enum_variant",
  pay_later: "enum_variant",
  gift_card: "enum_variant",
  mandate_acceptance_type: "enum_variant",
  mandate_type: "enum_variant",
  payment_type: "enum_variant",
  wallet: "enum_variant",
  upi: "enum_variant",
  voucher: "enum_variant",
  bank_transfer: "enum_variant",
  bank_redirect: "enum_variant",
  bank_debit: "enum_variant",
  crypto: "enum_variant",
  metadata: "metadata_value",
  reward: "enum_variant",
  amount: "number",
  currency: "enum_variant",
  authentication_type: "enum_variant",
  capture_method: "enum_variant",
  business_country: "enum_variant",
  billing_country: "enum_variant",
  business_label: "str_value",
  setup_future_usage: "enum_variant",
  card_redirect: "enum_variant",
  real_time_payment: "enum_variant",
  open_banking: "enum_variant",
  mobile_payment: "enum_variant",
  issuer_name: "str_value",
  issuer_country: "enum_variant",
  customer_device_platform: "enum_variant",
  customer_device_type: "enum_variant",
  customer_device_display_size: "enum_variant",
  acquirer_country: "enum_variant",
  acquirer_fraud_rate: "number",
};

export const allVariantValues = {
  payment_method: [
    "card",
    "card_redirect",
    "pay_later",
    "wallet",
    "bank_redirect",
    "bank_transfer",
    "crypto",
    "bank_debit",
    "reward",
    "real_time_payment",
    "upi",
    "voucher",
    "gift_card",
    "open_banking",
    "mobile_payment",
  ],
  card_type: ["credit", "debit"],
  card_network: [
    "Visa",
    "Mastercard",
    "AmericanExpress",
    "JCB",
    "DinersClub",
    "Discover",
    "CartesBancaires",
    "UnionPay",
    "Interac",
    "RuPay",
    "Maestro",
    "Star",
    "Pulse",
    "Accel",
    "Nyce",
  ],
  pay_later: [
    "affirm",
    "afterpay_clearpay",
    "alma",
    "klarna",
    "pay_bright",
    "walley",
    "atome",
  ],
  gift_card: ["pay_safe_card", "givex"],
  mandate_acceptance_type: ["online", "offline"],
  mandate_type: ["single_use", "multi_use"],
  payment_type: [
    "setup_mandate",
    "non_mandate",
    "new_mandate",
    "update_mandate",
    "ppt_mandate",
  ],
  wallet: [
    "google_pay",
    "amazon_pay",
    "apple_pay",
    "paypal",
    "ali_pay",
    "ali_pay_hk",
    "mb_way",
    "mobile_pay",
    "we_chat_pay",
    "samsung_pay",
    "go_pay",
    "kakao_pay",
    "twint",
    "gcash",
    "vipps",
    "momo",
    "dana",
    "touch_n_go",
    "swish",
    "cashapp",
    "venmo",
    "mifinity",
    "paze",
  ],
  upi: ["upi_collect", "upi_intent"],
  voucher: [
    "boleto",
    "efecty",
    "pago_efectivo",
    "red_compra",
    "red_pagos",
    "alfamart",
    "indomaret",
    "seven_eleven",
    "lawson",
    "mini_stop",
    "family_mart",
    "seicomart",
    "pay_easy",
    "oxxo",
  ],
  bank_transfer: [
    "multibanco",
    "ach",
    "sepa_bank_transfer",
    "bacs",
    "bca_bank_transfer",
    "bni_va",
    "bri_va",
    "cimb_va",
    "danamon_va",
    "mandiri_va",
    "permata_bank_transfer",
    "pix",
    "pse",
    "local_bank_transfer",
    "instant_bank_transfer",
  ],
  bank_redirect: [
    "bizum",
    "giropay",
    "ideal",
    "sofort",
    "eft",
    "eps",
    "bancontact_card",
    "blik",
    "interac",
    "local_bank_redirect",
    "online_banking_czech_republic",
    "online_banking_finland",
    "online_banking_poland",
    "online_banking_slovakia",
    "online_banking_fpx",
    "online_banking_thailand",
    "open_banking_uk",
    "przelewy24",
    "trustly",
  ],
  bank_debit: ["ach", "sepa", "bacs", "becs"],
  crypto: ["crypto_currency"],
  reward: ["classic_reward", "evoucher"],
  currency: [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STD",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
  ],
  authentication_type: ["three_ds", "no_three_ds"],
  capture_method: [
    "automatic",
    "manual",
    "manual_multiple",
    "scheduled",
    "sequential_automatic",
  ],
  business_country: [
    "Afghanistan",
    "AlandIslands",
    "Albania",
    "Algeria",
    "AmericanSamoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "AntiguaAndBarbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "BoliviaPlurinationalState",
    "BonaireSintEustatiusAndSaba",
    "BosniaAndHerzegovina",
    "Botswana",
    "BouvetIsland",
    "Brazil",
    "BritishIndianOceanTerritory",
    "BruneiDarussalam",
    "Bulgaria",
    "BurkinaFaso",
    "Burundi",
    "CaboVerde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "CaymanIslands",
    "CentralAfricanRepublic",
    "Chad",
    "Chile",
    "China",
    "ChristmasIsland",
    "CocosKeelingIslands",
    "Colombia",
    "Comoros",
    "Congo",
    "CongoDemocraticRepublic",
    "CookIslands",
    "CostaRica",
    "CotedIvoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "DominicanRepublic",
    "Ecuador",
    "Egypt",
    "ElSalvador",
    "EquatorialGuinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "FalklandIslandsMalvinas",
    "FaroeIslands",
    "Fiji",
    "Finland",
    "France",
    "FrenchGuiana",
    "FrenchPolynesia",
    "FrenchSouthernTerritories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "GuineaBissau",
    "Guyana",
    "Haiti",
    "HeardIslandAndMcDonaldIslands",
    "HolySee",
    "Honduras",
    "HongKong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "IranIslamicRepublic",
    "Iraq",
    "Ireland",
    "IsleOfMan",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "KoreaDemocraticPeoplesRepublic",
    "KoreaRepublic",
    "Kuwait",
    "Kyrgyzstan",
    "LaoPeoplesDemocraticRepublic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "MacedoniaTheFormerYugoslavRepublic",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "MarshallIslands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "MicronesiaFederatedStates",
    "MoldovaRepublic",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "NewCaledonia",
    "NewZealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "NorfolkIsland",
    "NorthernMarianaIslands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "PalestineState",
    "Panama",
    "PapuaNewGuinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "PuertoRico",
    "Qatar",
    "Reunion",
    "Romania",
    "RussianFederation",
    "Rwanda",
    "SaintBarthelemy",
    "SaintHelenaAscensionAndTristandaCunha",
    "SaintKittsAndNevis",
    "SaintLucia",
    "SaintMartinFrenchpart",
    "SaintPierreAndMiquelon",
    "SaintVincentAndTheGrenadines",
    "Samoa",
    "SanMarino",
    "SaoTomeAndPrincipe",
    "SaudiArabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "SierraLeone",
    "Singapore",
    "SintMaartenDutchpart",
    "Slovakia",
    "Slovenia",
    "SolomonIslands",
    "Somalia",
    "SouthAfrica",
    "SouthGeorgiaAndTheSouthSandwichIslands",
    "SouthSudan",
    "Spain",
    "SriLanka",
    "Sudan",
    "Suriname",
    "SvalbardAndJanMayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "SyrianArabRepublic",
    "TaiwanProvinceOfChina",
    "Tajikistan",
    "TanzaniaUnitedRepublic",
    "Thailand",
    "TimorLeste",
    "Togo",
    "Tokelau",
    "Tonga",
    "TrinidadAndTobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "TurksAndCaicosIslands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "UnitedArabEmirates",
    "UnitedKingdomOfGreatBritainAndNorthernIreland",
    "UnitedStatesOfAmerica",
    "UnitedStatesMinorOutlyingIslands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "VenezuelaBolivarianRepublic",
    "Vietnam",
    "VirginIslandsBritish",
    "VirginIslandsUS",
    "WallisAndFutuna",
    "WesternSahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ],
  billing_country: [
    "Afghanistan",
    "AlandIslands",
    "Albania",
    "Algeria",
    "AmericanSamoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "AntiguaAndBarbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "BoliviaPlurinationalState",
    "BonaireSintEustatiusAndSaba",
    "BosniaAndHerzegovina",
    "Botswana",
    "BouvetIsland",
    "Brazil",
    "BritishIndianOceanTerritory",
    "BruneiDarussalam",
    "Bulgaria",
    "BurkinaFaso",
    "Burundi",
    "CaboVerde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "CaymanIslands",
    "CentralAfricanRepublic",
    "Chad",
    "Chile",
    "China",
    "ChristmasIsland",
    "CocosKeelingIslands",
    "Colombia",
    "Comoros",
    "Congo",
    "CongoDemocraticRepublic",
    "CookIslands",
    "CostaRica",
    "CotedIvoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "DominicanRepublic",
    "Ecuador",
    "Egypt",
    "ElSalvador",
    "EquatorialGuinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "FalklandIslandsMalvinas",
    "FaroeIslands",
    "Fiji",
    "Finland",
    "France",
    "FrenchGuiana",
    "FrenchPolynesia",
    "FrenchSouthernTerritories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "GuineaBissau",
    "Guyana",
    "Haiti",
    "HeardIslandAndMcDonaldIslands",
    "HolySee",
    "Honduras",
    "HongKong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "IranIslamicRepublic",
    "Iraq",
    "Ireland",
    "IsleOfMan",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "KoreaDemocraticPeoplesRepublic",
    "KoreaRepublic",
    "Kuwait",
    "Kyrgyzstan",
    "LaoPeoplesDemocraticRepublic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "MacedoniaTheFormerYugoslavRepublic",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "MarshallIslands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "MicronesiaFederatedStates",
    "MoldovaRepublic",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "NewCaledonia",
    "NewZealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "NorfolkIsland",
    "NorthernMarianaIslands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "PalestineState",
    "Panama",
    "PapuaNewGuinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "PuertoRico",
    "Qatar",
    "Reunion",
    "Romania",
    "RussianFederation",
    "Rwanda",
    "SaintBarthelemy",
    "SaintHelenaAscensionAndTristandaCunha",
    "SaintKittsAndNevis",
    "SaintLucia",
    "SaintMartinFrenchpart",
    "SaintPierreAndMiquelon",
    "SaintVincentAndTheGrenadines",
    "Samoa",
    "SanMarino",
    "SaoTomeAndPrincipe",
    "SaudiArabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "SierraLeone",
    "Singapore",
    "SintMaartenDutchpart",
    "Slovakia",
    "Slovenia",
    "SolomonIslands",
    "Somalia",
    "SouthAfrica",
    "SouthGeorgiaAndTheSouthSandwichIslands",
    "SouthSudan",
    "Spain",
    "SriLanka",
    "Sudan",
    "Suriname",
    "SvalbardAndJanMayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "SyrianArabRepublic",
    "TaiwanProvinceOfChina",
    "Tajikistan",
    "TanzaniaUnitedRepublic",
    "Thailand",
    "TimorLeste",
    "Togo",
    "Tokelau",
    "Tonga",
    "TrinidadAndTobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "TurksAndCaicosIslands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "UnitedArabEmirates",
    "UnitedKingdomOfGreatBritainAndNorthernIreland",
    "UnitedStatesOfAmerica",
    "UnitedStatesMinorOutlyingIslands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "VenezuelaBolivarianRepublic",
    "Vietnam",
    "VirginIslandsBritish",
    "VirginIslandsUS",
    "WallisAndFutuna",
    "WesternSahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ],
  setup_future_usage: ["off_session", "on_session"],
  card_redirect: ["benefit", "knet", "momo_atm", "card_redirect"],
  real_time_payment: ["fps", "duit_now", "prompt_pay", "viet_qr"],
  open_banking: ["open_banking_pis"],
  mobile_payment: ["direct_carrier_billing"],
  issuer_country: [
    "Afghanistan",
    "AlandIslands",
    "Albania",
    "Algeria",
    "AmericanSamoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "AntiguaAndBarbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "BoliviaPlurinationalState",
    "BonaireSintEustatiusAndSaba",
    "BosniaAndHerzegovina",
    "Botswana",
    "BouvetIsland",
    "Brazil",
    "BritishIndianOceanTerritory",
    "BruneiDarussalam",
    "Bulgaria",
    "BurkinaFaso",
    "Burundi",
    "CaboVerde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "CaymanIslands",
    "CentralAfricanRepublic",
    "Chad",
    "Chile",
    "China",
    "ChristmasIsland",
    "CocosKeelingIslands",
    "Colombia",
    "Comoros",
    "Congo",
    "CongoDemocraticRepublic",
    "CookIslands",
    "CostaRica",
    "CotedIvoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "DominicanRepublic",
    "Ecuador",
    "Egypt",
    "ElSalvador",
    "EquatorialGuinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "FalklandIslandsMalvinas",
    "FaroeIslands",
    "Fiji",
    "Finland",
    "France",
    "FrenchGuiana",
    "FrenchPolynesia",
    "FrenchSouthernTerritories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "GuineaBissau",
    "Guyana",
    "Haiti",
    "HeardIslandAndMcDonaldIslands",
    "HolySee",
    "Honduras",
    "HongKong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "IranIslamicRepublic",
    "Iraq",
    "Ireland",
    "IsleOfMan",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "KoreaDemocraticPeoplesRepublic",
    "KoreaRepublic",
    "Kuwait",
    "Kyrgyzstan",
    "LaoPeoplesDemocraticRepublic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "MacedoniaTheFormerYugoslavRepublic",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "MarshallIslands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "MicronesiaFederatedStates",
    "MoldovaRepublic",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "NewCaledonia",
    "NewZealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "NorfolkIsland",
    "NorthernMarianaIslands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "PalestineState",
    "Panama",
    "PapuaNewGuinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "PuertoRico",
    "Qatar",
    "Reunion",
    "Romania",
    "RussianFederation",
    "Rwanda",
    "SaintBarthelemy",
    "SaintHelenaAscensionAndTristandaCunha",
    "SaintKittsAndNevis",
    "SaintLucia",
    "SaintMartinFrenchpart",
    "SaintPierreAndMiquelon",
    "SaintVincentAndTheGrenadines",
    "Samoa",
    "SanMarino",
    "SaoTomeAndPrincipe",
    "SaudiArabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "SierraLeone",
    "Singapore",
    "SintMaartenDutchpart",
    "Slovakia",
    "Slovenia",
    "SolomonIslands",
    "Somalia",
    "SouthAfrica",
    "SouthGeorgiaAndTheSouthSandwichIslands",
    "SouthSudan",
    "Spain",
    "SriLanka",
    "Sudan",
    "Suriname",
    "SvalbardAndJanMayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "SyrianArabRepublic",
    "TaiwanProvinceOfChina",
    "Tajikistan",
    "TanzaniaUnitedRepublic",
    "Thailand",
    "TimorLeste",
    "Togo",
    "Tokelau",
    "Tonga",
    "TrinidadAndTobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "TurksAndCaicosIslands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "UnitedArabEmirates",
    "UnitedKingdomOfGreatBritainAndNorthernIreland",
    "UnitedStatesOfAmerica",
    "UnitedStatesMinorOutlyingIslands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "VenezuelaBolivarianRepublic",
    "Vietnam",
    "VirginIslandsBritish",
    "VirginIslandsUS",
    "WallisAndFutuna",
    "WesternSahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ],
  customer_device_platform: ["web", "android", "ios"],
  customer_device_type: ["mobile", "tablet", "desktop", "gaming_console"],
  customer_device_display_size: [
    "size320x568",
    "size375x667",
    "size390x844",
    "size414x896",
    "size428x926",
    "size768x1024",
    "size834x1112",
    "size834x1194",
    "size1024x1366",
    "size1280x720",
    "size1366x768",
    "size1440x900",
    "size1920x1080",
    "size2560x1440",
    "size3840x2160",
    "size500x600",
    "size600x400",
    "size360x640",
    "size412x915",
    "size800x1280",
  ],
  acquirer_country: [
    "Afghanistan",
    "AlandIslands",
    "Albania",
    "Algeria",
    "AmericanSamoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "AntiguaAndBarbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "BoliviaPlurinationalState",
    "BonaireSintEustatiusAndSaba",
    "BosniaAndHerzegovina",
    "Botswana",
    "BouvetIsland",
    "Brazil",
    "BritishIndianOceanTerritory",
    "BruneiDarussalam",
    "Bulgaria",
    "BurkinaFaso",
    "Burundi",
    "CaboVerde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "CaymanIslands",
    "CentralAfricanRepublic",
    "Chad",
    "Chile",
    "China",
    "ChristmasIsland",
    "CocosKeelingIslands",
    "Colombia",
    "Comoros",
    "Congo",
    "CongoDemocraticRepublic",
    "CookIslands",
    "CostaRica",
    "CotedIvoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "DominicanRepublic",
    "Ecuador",
    "Egypt",
    "ElSalvador",
    "EquatorialGuinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "FalklandIslandsMalvinas",
    "FaroeIslands",
    "Fiji",
    "Finland",
    "France",
    "FrenchGuiana",
    "FrenchPolynesia",
    "FrenchSouthernTerritories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "GuineaBissau",
    "Guyana",
    "Haiti",
    "HeardIslandAndMcDonaldIslands",
    "HolySee",
    "Honduras",
    "HongKong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "IranIslamicRepublic",
    "Iraq",
    "Ireland",
    "IsleOfMan",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "KoreaDemocraticPeoplesRepublic",
    "KoreaRepublic",
    "Kuwait",
    "Kyrgyzstan",
    "LaoPeoplesDemocraticRepublic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "MacedoniaTheFormerYugoslavRepublic",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "MarshallIslands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "MicronesiaFederatedStates",
    "MoldovaRepublic",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "NewCaledonia",
    "NewZealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "NorfolkIsland",
    "NorthernMarianaIslands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "PalestineState",
    "Panama",
    "PapuaNewGuinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "PuertoRico",
    "Qatar",
    "Reunion",
    "Romania",
    "RussianFederation",
    "Rwanda",
    "SaintBarthelemy",
    "SaintHelenaAscensionAndTristandaCunha",
    "SaintKittsAndNevis",
    "SaintLucia",
    "SaintMartinFrenchpart",
    "SaintPierreAndMiquelon",
    "SaintVincentAndTheGrenadines",
    "Samoa",
    "SanMarino",
    "SaoTomeAndPrincipe",
    "SaudiArabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "SierraLeone",
    "Singapore",
    "SintMaartenDutchpart",
    "Slovakia",
    "Slovenia",
    "SolomonIslands",
    "Somalia",
    "SouthAfrica",
    "SouthGeorgiaAndTheSouthSandwichIslands",
    "SouthSudan",
    "Spain",
    "SriLanka",
    "Sudan",
    "Suriname",
    "SvalbardAndJanMayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "SyrianArabRepublic",
    "TaiwanProvinceOfChina",
    "Tajikistan",
    "TanzaniaUnitedRepublic",
    "Thailand",
    "TimorLeste",
    "Togo",
    "Tokelau",
    "Tonga",
    "TrinidadAndTobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "TurksAndCaicosIslands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "UnitedArabEmirates",
    "UnitedKingdomOfGreatBritainAndNorthernIreland",
    "UnitedStatesOfAmerica",
    "UnitedStatesMinorOutlyingIslands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "VenezuelaBolivarianRepublic",
    "Vietnam",
    "VirginIslandsBritish",
    "VirginIslandsUS",
    "WallisAndFutuna",
    "WesternSahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ],
};

export const inputSequence = {
  enum_variant: ["key-item", "operator", "select-value"],
  metadata_value: ["key-item", "key-input", "operator", "value-input"],
  str_value: ["key-item", "operator", "value-input"],
  number: ["key-item", "operator", "value-input"],
};
