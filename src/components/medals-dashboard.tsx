// src/components/medals.tsx
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import DashboardCard from "./dashboard-card";
import {
  Chart,
  MemberFilterTile,
  ScattermapChart,
  ColumnChart,
  Table,
} from "@sisense/sdk-ui";
import * as DM from "../olympics";
import { measureFactory, Filter } from "@sisense/sdk-data";

const Medals: React.FC = () => {
  const [filtersport, setFiltersport] = useState<Filter | null>(null);
  const [filterdate, setFilterdate] = useState<Filter | null>(null);
  const [filterCountry, setFilterCountry] = useState<Filter | null>(null);

  const activeFilters: Filter[] = [
    filtersport,
    filterdate,
    filterCountry,
  ].filter((f) => !!f) as Filter[];

  return (
    <Grid container spacing={2} rowSpacing={2} sx={{ m: 0, pb: 2 }}>
      <Grid item xs={9}>
        <Grid container spacing={2} rowSpacing={2}>
          <DashboardCard title="Total Medals" gridColumns={6}>
            <ColumnChart
              dataSet={DM.DataSource}
              dataOptions={{
                category: [DM.medals_totalcsv.country_code],
                value: [
                  measureFactory.sum(
                    DM.medals_totalcsv.GoldMedal,
                    "Total Gold Medals",
                  ),
                  measureFactory.sum(
                    DM.medals_totalcsv.BronzeMedal,
                    "Total Bronze Medals",
                  ),
                  measureFactory.sum(
                    DM.medals_totalcsv.SilverMedal,
                    "Total Silver Medals",
                  ),
                ],
                breakBy: [],
              }}
              filters={activeFilters}
              styleOptions={{
                subtype: "column/stackedcolumn",
              }}
            />
          </DashboardCard>
          <DashboardCard title="Age Demographics" gridColumns={6}>
            <Chart
              dataSet={DM.DataSource}
              chartType="pie"
              dataOptions={{
                category: [DM.medals_totalcsv.country_code],
                value: [
                  measureFactory.sum(
                    DM.medals_totalcsv.Total,
                    "Total Medals by Country",
                  ),
                ],
                breakBy: [],
              }}
              filters={activeFilters}
              styleOptions={{
                legend: { enabled: false },
                subtype: "pie/ring",
              }}
            />
          </DashboardCard>
          <DashboardCard title="Buyer Analysis" gridColumns={12}>
            <Table
              dataSet={DM.DataSource}
              dataOptions={{
                columns: [
                  {
                    column: DM.medals_totalcsv.country_code,
                    name: "Country",
                  },
                  measureFactory.sum(
                    DM.medals_totalcsv.GoldMedal,
                    "Total Gold Medals",
                  ),
                  measureFactory.sum(
                    DM.medals_totalcsv.SilverMedal,
                    "Total Silver Medals",
                  ),
                  measureFactory.sum(
                    DM.medals_totalcsv.BronzeMedal,
                    "Total Bronze Medals",
                  ),
                ],
              }}
              filters={activeFilters}
              styleOptions={{
                rowsPerPage: 12,
                height: 420,
                header: {
                  color: {
                    enabled: true,
                    backgroundColor: "rgb(255, 203, 5)",
                    textColor: "#000000",
                  },
                },
                rows: {
                  alternatingColor: {
                    enabled: true,
                    backgroundColor: "#424242",
                  },
                },
              }}
            />
          </DashboardCard>
          <DashboardCard
            title="Site Popularity"
            gridColumns={6}
          ></DashboardCard>
          <DashboardCard title="Geography" gridColumns={6}>
            <ScattermapChart
              dataSet={DM.DataSource}
              dataOptions={{
                geo: [DM.medals_totalcsv.country_code],
                size: measureFactory.sum(
                  DM.medals_totalcsv.Total,
                  "Medals by Country",
                ),
                colorBy: {
                  column: measureFactory.sum(
                    DM.medals_totalcsv.Total,
                    "Color by Medals",
                  ),
                  color: "#f72585",
                },
                details: DM.medals_totalcsv.country_code,
              }}
              filters={activeFilters}
            />
          </DashboardCard>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid item xs={12}>
          <MemberFilterTile
            title="Sport"
            dataSource={DM.DataSource}
            attribute={DM.eventscsv.sport}
            filter={filtersport}
            onChange={setFiltersport}
          />
        </Grid>
        <Grid item xs={12}>
          <MemberFilterTile
            title="Date"
            dataSource={DM.DataSource}
            attribute={DM.medalscsv.medal_date}
            filter={filterdate}
            onChange={setFilterdate}
          />
        </Grid>
        <Grid item xs={12}>
          <MemberFilterTile
            title="Country"
            dataSource={DM.DataSource}
            attribute={DM.medals_totalcsv.country_code}
            filter={filterCountry}
            onChange={setFilterCountry}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Medals;
