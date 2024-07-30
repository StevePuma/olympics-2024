import type {
  Dimension,
  DateDimension,
  Attribute,
  DataSourceInfo,
} from "@sisense/sdk-data";

import {
  createAttribute,
  createDateDimension,
  createDimension,
} from "@sisense/sdk-data";

export const DataSource: DataSourceInfo = {
  title: "Olympics",
  type: "elasticube",
};

interface athletescsvDimension extends Dimension {
  birth_country: Attribute;
  birth_place: Attribute;
  coach: Attribute;
  code: Attribute;
  country: Attribute;
  country_code: Attribute;
  country_full: Attribute;
  disciplines: Attribute;
  education: Attribute;
  events: Attribute;
  family: Attribute;
  function: Attribute;
  gender: Attribute;
  height: Attribute;
  hero: Attribute;
  hobbies: Attribute;
  influence: Attribute;
  lang: Attribute;
  athletes_csvname: Attribute;
  name_short: Attribute;
  name_tv: Attribute;
  nationality: Attribute;
  nationality_code: Attribute;
  nationality_full: Attribute;
  nickname: Attribute;
  occupation: Attribute;
  other_sports: Attribute;
  philosophy: Attribute;
  reason: Attribute;
  residence_country: Attribute;
  residence_place: Attribute;
  ritual: Attribute;
  sporting_relatives: Attribute;
  weight: Attribute;
  birth_date: DateDimension;
}
export const athletescsv = createDimension({
  name: "athletes.csv",
  birth_country: createAttribute({
    name: "birth_country",
    type: "text-attribute",
    expression: "[athletes.csv.birth_country]",
  }),
  birth_place: createAttribute({
    name: "birth_place",
    type: "text-attribute",
    expression: "[athletes.csv.birth_place]",
  }),
  coach: createAttribute({
    name: "coach",
    type: "text-attribute",
    expression: "[athletes.csv.coach]",
  }),
  code: createAttribute({
    name: "code",
    type: "numeric-attribute",
    expression: "[athletes.csv.code]",
  }),
  country: createAttribute({
    name: "country",
    type: "text-attribute",
    expression: "[athletes.csv.country]",
  }),
  country_code: createAttribute({
    name: "country_code",
    type: "text-attribute",
    expression: "[athletes.csv.country_code]",
  }),
  country_full: createAttribute({
    name: "country_full",
    type: "text-attribute",
    expression: "[athletes.csv.country_full]",
  }),
  disciplines: createAttribute({
    name: "disciplines",
    type: "text-attribute",
    expression: "[athletes.csv.disciplines]",
  }),
  education: createAttribute({
    name: "education",
    type: "text-attribute",
    expression: "[athletes.csv.education]",
  }),
  events: createAttribute({
    name: "events",
    type: "text-attribute",
    expression: "[athletes.csv.events]",
  }),
  family: createAttribute({
    name: "family",
    type: "text-attribute",
    expression: "[athletes.csv.family]",
  }),
  function: createAttribute({
    name: "function",
    type: "text-attribute",
    expression: "[athletes.csv.function]",
  }),
  gender: createAttribute({
    name: "gender",
    type: "text-attribute",
    expression: "[athletes.csv.gender]",
  }),
  height: createAttribute({
    name: "height",
    type: "numeric-attribute",
    expression: "[athletes.csv.height]",
  }),
  hero: createAttribute({
    name: "hero",
    type: "text-attribute",
    expression: "[athletes.csv.hero]",
  }),
  hobbies: createAttribute({
    name: "hobbies",
    type: "text-attribute",
    expression: "[athletes.csv.hobbies]",
  }),
  influence: createAttribute({
    name: "influence",
    type: "text-attribute",
    expression: "[athletes.csv.influence]",
  }),
  lang: createAttribute({
    name: "lang",
    type: "text-attribute",
    expression: "[athletes.csv.lang]",
  }),
  athletes_csvname: createAttribute({
    name: "athletes_csvname",
    type: "text-attribute",
    expression: "[athletes.csv.name]",
  }),
  name_short: createAttribute({
    name: "name_short",
    type: "text-attribute",
    expression: "[athletes.csv.name_short]",
  }),
  name_tv: createAttribute({
    name: "name_tv",
    type: "text-attribute",
    expression: "[athletes.csv.name_tv]",
  }),
  nationality: createAttribute({
    name: "nationality",
    type: "text-attribute",
    expression: "[athletes.csv.nationality]",
  }),
  nationality_code: createAttribute({
    name: "nationality_code",
    type: "text-attribute",
    expression: "[athletes.csv.nationality_code]",
  }),
  nationality_full: createAttribute({
    name: "nationality_full",
    type: "text-attribute",
    expression: "[athletes.csv.nationality_full]",
  }),
  nickname: createAttribute({
    name: "nickname",
    type: "text-attribute",
    expression: "[athletes.csv.nickname]",
  }),
  occupation: createAttribute({
    name: "occupation",
    type: "text-attribute",
    expression: "[athletes.csv.occupation]",
  }),
  other_sports: createAttribute({
    name: "other_sports",
    type: "text-attribute",
    expression: "[athletes.csv.other_sports]",
  }),
  philosophy: createAttribute({
    name: "philosophy",
    type: "text-attribute",
    expression: "[athletes.csv.philosophy]",
  }),
  reason: createAttribute({
    name: "reason",
    type: "text-attribute",
    expression: "[athletes.csv.reason]",
  }),
  residence_country: createAttribute({
    name: "residence_country",
    type: "text-attribute",
    expression: "[athletes.csv.residence_country]",
  }),
  residence_place: createAttribute({
    name: "residence_place",
    type: "text-attribute",
    expression: "[athletes.csv.residence_place]",
  }),
  ritual: createAttribute({
    name: "ritual",
    type: "text-attribute",
    expression: "[athletes.csv.ritual]",
  }),
  sporting_relatives: createAttribute({
    name: "sporting_relatives",
    type: "text-attribute",
    expression: "[athletes.csv.sporting_relatives]",
  }),
  weight: createAttribute({
    name: "weight",
    type: "numeric-attribute",
    expression: "[athletes.csv.weight]",
  }),
  birth_date: createDateDimension({
    name: "birth_date",
    expression: "[athletes.csv.birth_date (Calendar)]",
  }),
}) as athletescsvDimension;

interface eventscsvDimension extends Dimension {
  event: Attribute;
  sport: Attribute;
  sport_code: Attribute;
  sport_url: Attribute;
  tag: Attribute;
}
export const eventscsv = createDimension({
  name: "events.csv",
  event: createAttribute({
    name: "event",
    type: "text-attribute",
    expression: "[events.csv.event]",
  }),
  sport: createAttribute({
    name: "sport",
    type: "text-attribute",
    expression: "[events.csv.sport]",
  }),
  sport_code: createAttribute({
    name: "sport_code",
    type: "text-attribute",
    expression: "[events.csv.sport_code]",
  }),
  sport_url: createAttribute({
    name: "sport_url",
    type: "text-attribute",
    expression: "[events.csv.sport_url]",
  }),
  tag: createAttribute({
    name: "tag",
    type: "text-attribute",
    expression: "[events.csv.tag]",
  }),
}) as eventscsvDimension;

interface medallistscsvDimension extends Dimension {
  code: Attribute;
  country: Attribute;
  country_code: Attribute;
  discipline: Attribute;
  event: Attribute;
  event_type: Attribute;
  gender: Attribute;
  medal_code: Attribute;
  medal_type: Attribute;
  medallists_csvname: Attribute;
  nationality: Attribute;
  team: Attribute;
  team_gender: Attribute;
  url_event: Attribute;
  birth_date: DateDimension;
  medal_date: DateDimension;
}
export const medallistscsv = createDimension({
  name: "medallists.csv",
  code: createAttribute({
    name: "code",
    type: "numeric-attribute",
    expression: "[medallists.csv.code]",
  }),
  country: createAttribute({
    name: "country",
    type: "text-attribute",
    expression: "[medallists.csv.country]",
  }),
  country_code: createAttribute({
    name: "country_code",
    type: "text-attribute",
    expression: "[medallists.csv.country_code]",
  }),
  discipline: createAttribute({
    name: "discipline",
    type: "text-attribute",
    expression: "[medallists.csv.discipline]",
  }),
  event: createAttribute({
    name: "event",
    type: "text-attribute",
    expression: "[medallists.csv.event]",
  }),
  event_type: createAttribute({
    name: "event_type",
    type: "text-attribute",
    expression: "[medallists.csv.event_type]",
  }),
  gender: createAttribute({
    name: "gender",
    type: "text-attribute",
    expression: "[medallists.csv.gender]",
  }),
  medal_code: createAttribute({
    name: "medal_code",
    type: "numeric-attribute",
    expression: "[medallists.csv.medal_code]",
  }),
  medal_type: createAttribute({
    name: "medal_type",
    type: "text-attribute",
    expression: "[medallists.csv.medal_type]",
  }),
  medallists_csvname: createAttribute({
    name: "medallists_csvname",
    type: "text-attribute",
    expression: "[medallists.csv.name]",
  }),
  nationality: createAttribute({
    name: "nationality",
    type: "text-attribute",
    expression: "[medallists.csv.nationality]",
  }),
  team: createAttribute({
    name: "team",
    type: "text-attribute",
    expression: "[medallists.csv.team]",
  }),
  team_gender: createAttribute({
    name: "team_gender",
    type: "text-attribute",
    expression: "[medallists.csv.team_gender]",
  }),
  url_event: createAttribute({
    name: "url_event",
    type: "text-attribute",
    expression: "[medallists.csv.url_event]",
  }),
  birth_date: createDateDimension({
    name: "birth_date",
    expression: "[medallists.csv.birth_date (Calendar)]",
  }),
  medal_date: createDateDimension({
    name: "medal_date",
    expression: "[medallists.csv.medal_date (Calendar)]",
  }),
}) as medallistscsvDimension;

interface medalscsvDimension extends Dimension {
  code: Attribute;
  country_code: Attribute;
  discipline: Attribute;
  event: Attribute;
  event_type: Attribute;
  gender: Attribute;
  medal_code: Attribute;
  medal_type: Attribute;
  medals_csvname: Attribute;
  url_event: Attribute;
  medal_date: DateDimension;
}
export const medalscsv = createDimension({
  name: "medals.csv",
  code: createAttribute({
    name: "code",
    type: "numeric-attribute",
    expression: "[medals.csv.code]",
  }),
  country_code: createAttribute({
    name: "country_code",
    type: "text-attribute",
    expression: "[medals.csv.country_code]",
  }),
  discipline: createAttribute({
    name: "discipline",
    type: "text-attribute",
    expression: "[medals.csv.discipline]",
  }),
  event: createAttribute({
    name: "event",
    type: "text-attribute",
    expression: "[medals.csv.event]",
  }),
  event_type: createAttribute({
    name: "event_type",
    type: "text-attribute",
    expression: "[medals.csv.event_type]",
  }),
  gender: createAttribute({
    name: "gender",
    type: "text-attribute",
    expression: "[medals.csv.gender]",
  }),
  medal_code: createAttribute({
    name: "medal_code",
    type: "numeric-attribute",
    expression: "[medals.csv.medal_code]",
  }),
  medal_type: createAttribute({
    name: "medal_type",
    type: "text-attribute",
    expression: "[medals.csv.medal_type]",
  }),
  medals_csvname: createAttribute({
    name: "medals_csvname",
    type: "text-attribute",
    expression: "[medals.csv.name]",
  }),
  url_event: createAttribute({
    name: "url_event",
    type: "text-attribute",
    expression: "[medals.csv.url_event]",
  }),
  medal_date: createDateDimension({
    name: "medal_date",
    expression: "[medals.csv.medal_date (Calendar)]",
  }),
}) as medalscsvDimension;

interface medals_totalcsvDimension extends Dimension {
  BronzeMedal: Attribute;
  country_code: Attribute;
  GoldMedal: Attribute;
  SilverMedal: Attribute;
  Total: Attribute;
}
export const medals_totalcsv = createDimension({
  name: "medals_total.csv",
  BronzeMedal: createAttribute({
    name: "BronzeMedal",
    type: "numeric-attribute",
    expression: "[medals_total.csv.Bronze Medal]",
  }),
  country_code: createAttribute({
    name: "country_code",
    type: "text-attribute",
    expression: "[medals_total.csv.country_code]",
  }),
  GoldMedal: createAttribute({
    name: "GoldMedal",
    type: "numeric-attribute",
    expression: "[medals_total.csv.Gold Medal]",
  }),
  SilverMedal: createAttribute({
    name: "SilverMedal",
    type: "numeric-attribute",
    expression: "[medals_total.csv.Silver Medal]",
  }),
  Total: createAttribute({
    name: "Total",
    type: "numeric-attribute",
    expression: "[medals_total.csv.Total]",
  }),
}) as medals_totalcsvDimension;

interface schedulescsvDimension extends Dimension {
  discipline: Attribute;
  discipline_code: Attribute;
  event: Attribute;
  event_medal: Attribute;
  event_type: Attribute;
  gender: Attribute;
  location_code: Attribute;
  location_description: Attribute;
  phase: Attribute;
  status: Attribute;
  url: Attribute;
  venue: Attribute;
  venue_code: Attribute;
  day: DateDimension;
  end_date: DateDimension;
  start_date: DateDimension;
}
export const schedulescsv = createDimension({
  name: "schedules.csv",
  discipline: createAttribute({
    name: "discipline",
    type: "text-attribute",
    expression: "[schedules.csv.discipline]",
  }),
  discipline_code: createAttribute({
    name: "discipline_code",
    type: "text-attribute",
    expression: "[schedules.csv.discipline_code]",
  }),
  event: createAttribute({
    name: "event",
    type: "text-attribute",
    expression: "[schedules.csv.event]",
  }),
  event_medal: createAttribute({
    name: "event_medal",
    type: "numeric-attribute",
    expression: "[schedules.csv.event_medal]",
  }),
  event_type: createAttribute({
    name: "event_type",
    type: "text-attribute",
    expression: "[schedules.csv.event_type]",
  }),
  gender: createAttribute({
    name: "gender",
    type: "text-attribute",
    expression: "[schedules.csv.gender]",
  }),
  location_code: createAttribute({
    name: "location_code",
    type: "text-attribute",
    expression: "[schedules.csv.location_code]",
  }),
  location_description: createAttribute({
    name: "location_description",
    type: "text-attribute",
    expression: "[schedules.csv.location_description]",
  }),
  phase: createAttribute({
    name: "phase",
    type: "text-attribute",
    expression: "[schedules.csv.phase]",
  }),
  status: createAttribute({
    name: "status",
    type: "text-attribute",
    expression: "[schedules.csv.status]",
  }),
  url: createAttribute({
    name: "url",
    type: "text-attribute",
    expression: "[schedules.csv.url]",
  }),
  venue: createAttribute({
    name: "venue",
    type: "text-attribute",
    expression: "[schedules.csv.venue]",
  }),
  venue_code: createAttribute({
    name: "venue_code",
    type: "text-attribute",
    expression: "[schedules.csv.venue_code]",
  }),
  day: createDateDimension({
    name: "day",
    expression: "[schedules.csv.day (Calendar)]",
  }),
  end_date: createDateDimension({
    name: "end_date",
    expression: "[schedules.csv.end_date (Calendar)]",
  }),
  start_date: createDateDimension({
    name: "start_date",
    expression: "[schedules.csv.start_date (Calendar)]",
  }),
}) as schedulescsvDimension;

interface schedules_preliminarycsvDimension extends Dimension {
  schedules_preliminary_csvdescription: Attribute;
  discription_other: Attribute;
  estimated: Attribute;
  estimated_start: Attribute;
  medal: Attribute;
  sport: Attribute;
  sport_code: Attribute;
  sport_url: Attribute;
  start_text: Attribute;
  tag: Attribute;
  team_1: Attribute;
  team_1_code: Attribute;
  team_2: Attribute;
  team_2_code: Attribute;
  venue_code: Attribute;
  venue_code_other: Attribute;
  date_end_utc: DateDimension;
  date_start_utc: DateDimension;
}
export const schedules_preliminarycsv = createDimension({
  name: "schedules_preliminary.csv",
  schedules_preliminary_csvdescription: createAttribute({
    name: "schedules_preliminary_csvdescription",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.description]",
  }),
  discription_other: createAttribute({
    name: "discription_other",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.discription_other]",
  }),
  estimated: createAttribute({
    name: "estimated",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.estimated]",
  }),
  estimated_start: createAttribute({
    name: "estimated_start",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.estimated_start]",
  }),
  medal: createAttribute({
    name: "medal",
    type: "numeric-attribute",
    expression: "[schedules_preliminary.csv.medal]",
  }),
  sport: createAttribute({
    name: "sport",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.sport]",
  }),
  sport_code: createAttribute({
    name: "sport_code",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.sport_code]",
  }),
  sport_url: createAttribute({
    name: "sport_url",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.sport_url]",
  }),
  start_text: createAttribute({
    name: "start_text",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.start_text]",
  }),
  tag: createAttribute({
    name: "tag",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.tag]",
  }),
  team_1: createAttribute({
    name: "team_1",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.team_1]",
  }),
  team_1_code: createAttribute({
    name: "team_1_code",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.team_1_code]",
  }),
  team_2: createAttribute({
    name: "team_2",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.team_2]",
  }),
  team_2_code: createAttribute({
    name: "team_2_code",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.team_2_code]",
  }),
  venue_code: createAttribute({
    name: "venue_code",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.venue_code]",
  }),
  venue_code_other: createAttribute({
    name: "venue_code_other",
    type: "text-attribute",
    expression: "[schedules_preliminary.csv.venue_code_other]",
  }),
  date_end_utc: createDateDimension({
    name: "date_end_utc",
    expression: "[schedules_preliminary.csv.date_end_utc (Calendar)]",
  }),
  date_start_utc: createDateDimension({
    name: "date_start_utc",
    expression: "[schedules_preliminary.csv.date_start_utc (Calendar)]",
  }),
}) as schedules_preliminarycsvDimension;

interface teamscsvDimension extends Dimension {
  athletes: Attribute;
  athletes_codes: Attribute;
  coaches: Attribute;
  coaches_codes: Attribute;
  code: Attribute;
  country: Attribute;
  country_code: Attribute;
  country_full: Attribute;
  discipline: Attribute;
  disciplines_code: Attribute;
  events: Attribute;
  num_athletes: Attribute;
  num_coaches: Attribute;
  team: Attribute;
  team_gender: Attribute;
}
export const teamscsv = createDimension({
  name: "teams.csv",
  athletes: createAttribute({
    name: "athletes",
    type: "text-attribute",
    expression: "[teams.csv.athletes]",
  }),
  athletes_codes: createAttribute({
    name: "athletes_codes",
    type: "text-attribute",
    expression: "[teams.csv.athletes_codes]",
  }),
  coaches: createAttribute({
    name: "coaches",
    type: "text-attribute",
    expression: "[teams.csv.coaches]",
  }),
  coaches_codes: createAttribute({
    name: "coaches_codes",
    type: "text-attribute",
    expression: "[teams.csv.coaches_codes]",
  }),
  code: createAttribute({
    name: "code",
    type: "text-attribute",
    expression: "[teams.csv.code]",
  }),
  country: createAttribute({
    name: "country",
    type: "text-attribute",
    expression: "[teams.csv.country]",
  }),
  country_code: createAttribute({
    name: "country_code",
    type: "text-attribute",
    expression: "[teams.csv.country_code]",
  }),
  country_full: createAttribute({
    name: "country_full",
    type: "text-attribute",
    expression: "[teams.csv.country_full]",
  }),
  discipline: createAttribute({
    name: "discipline",
    type: "text-attribute",
    expression: "[teams.csv.discipline]",
  }),
  disciplines_code: createAttribute({
    name: "disciplines_code",
    type: "text-attribute",
    expression: "[teams.csv.disciplines_code]",
  }),
  events: createAttribute({
    name: "events",
    type: "text-attribute",
    expression: "[teams.csv.events]",
  }),
  num_athletes: createAttribute({
    name: "num_athletes",
    type: "numeric-attribute",
    expression: "[teams.csv.num_athletes]",
  }),
  num_coaches: createAttribute({
    name: "num_coaches",
    type: "text-attribute",
    expression: "[teams.csv.num_coaches]",
  }),
  team: createAttribute({
    name: "team",
    type: "text-attribute",
    expression: "[teams.csv.team]",
  }),
  team_gender: createAttribute({
    name: "team_gender",
    type: "text-attribute",
    expression: "[teams.csv.team_gender]",
  }),
}) as teamscsvDimension;

interface torch_routecsvDimension extends Dimension {
  city: Attribute;
  stage_number: Attribute;
  tag: Attribute;
  title: Attribute;
  url: Attribute;
  date_end: DateDimension;
  date_start: DateDimension;
}
export const torch_routecsv = createDimension({
  name: "torch_route.csv",
  city: createAttribute({
    name: "city",
    type: "text-attribute",
    expression: "[torch_route.csv.city]",
  }),
  stage_number: createAttribute({
    name: "stage_number",
    type: "numeric-attribute",
    expression: "[torch_route.csv.stage_number]",
  }),
  tag: createAttribute({
    name: "tag",
    type: "text-attribute",
    expression: "[torch_route.csv.tag]",
  }),
  title: createAttribute({
    name: "title",
    type: "text-attribute",
    expression: "[torch_route.csv.title]",
  }),
  url: createAttribute({
    name: "url",
    type: "text-attribute",
    expression: "[torch_route.csv.url]",
  }),
  date_end: createDateDimension({
    name: "date_end",
    expression: "[torch_route.csv.date_end (Calendar)]",
  }),
  date_start: createDateDimension({
    name: "date_start",
    expression: "[torch_route.csv.date_start (Calendar)]",
  }),
}) as torch_routecsvDimension;

interface venuescsvDimension extends Dimension {
  sports: Attribute;
  tag: Attribute;
  url: Attribute;
  venue: Attribute;
  date_end: DateDimension;
  date_start: DateDimension;
}
export const venuescsv = createDimension({
  name: "venues.csv",
  sports: createAttribute({
    name: "sports",
    type: "text-attribute",
    expression: "[venues.csv.sports]",
  }),
  tag: createAttribute({
    name: "tag",
    type: "text-attribute",
    expression: "[venues.csv.tag]",
  }),
  url: createAttribute({
    name: "url",
    type: "text-attribute",
    expression: "[venues.csv.url]",
  }),
  venue: createAttribute({
    name: "venue",
    type: "text-attribute",
    expression: "[venues.csv.venue]",
  }),
  date_end: createDateDimension({
    name: "date_end",
    expression: "[venues.csv.date_end (Calendar)]",
  }),
  date_start: createDateDimension({
    name: "date_start",
    expression: "[venues.csv.date_start (Calendar)]",
  }),
}) as venuescsvDimension;
