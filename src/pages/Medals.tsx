import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import DashboardCard from "../components/dashboard-card";
import {
  Chart,
  ScattermapChart,
  ColumnChart,
  useExecuteQuery,
  IndicatorChart,
} from "@sisense/sdk-ui";
import * as DM from "../olympics";
import { measureFactory, Filter, filterFactory } from "@sisense/sdk-data";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CustomDropdown from "../components/CustomDropdown";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Medals: React.FC = () => {
  const [filterGender, setFilterGender] = useState<string | null>(null);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  const sportQueryProps = {
    dataSource: DM.DataSource,
    dimensions: [DM.medallistscsv.gender],
    measures: [],
  };

  const countryQueryProps = {
    dataSource: DM.DataSource,
    dimensions: [DM.medals_totalcsv.country_code],
    measures: [],
  };

  const { data: sportData } = useExecuteQuery(sportQueryProps);
  const { data: countryData } = useExecuteQuery(countryQueryProps);

  const sportOptions = sportData?.rows.map((row: any) => row[0].text) || [];
  const countryOptions = countryData?.rows.map((row: any) => row[0].text) || [];

  const activeFilters: Filter[] = [
    filterGender ? filterFactory.equals(DM.eventscsv.sport, filterGender) : null,
    filterCountry
      ? filterFactory.equals(DM.medals_totalcsv.country_code, filterCountry)
      : null,
  ].filter((f) => !!f) as Filter[];

  return (
    <Box sx={{ flexGrow: 1, height: "100%", overflow: "auto", padding: 2 }}>
      <Toolbar />
      <Grid container spacing={2}>
        {/* Twitter timeline as left panel */}
        <Grid item xs={3}>
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Olympics"
              options={{ height: '900px' }}
              theme="dark"
            />
          </div>
        </Grid>

        {/* Main dashboard components */}
        <Grid item xs={9}>
          <Grid container spacing={1}>
            {/* Dropdown filters */}
            <Grid item xs={12}>
              <CustomDropdown
                label="Country"
                value={filterCountry}
                options={countryOptions}
                onChange={setFilterCountry}
              />
            </Grid>

            {/* Placeholders for indicators */}
            <Grid item xs={4}>
              <DashboardCard
                title="Total Gold Medals"
                gridColumns={12}
                height={100}
              >
                <IndicatorChart
                  dataSet={DM.DataSource}
                  dataOptions={{
                    value: [
                      measureFactory.sum(
                        DM.medals_totalcsv.GoldMedal,
                        "Total Gold Medals"
                      ),
                    ],
                  }}
                  filters={activeFilters}
                />
              </DashboardCard>
            </Grid>
            <Grid item xs={4}>
              <DashboardCard
                title="Total Silver Medals"
                gridColumns={12}
                height={100}
              >
                <IndicatorChart
                  dataSet={DM.DataSource}
                  dataOptions={{
                    value: [
                      measureFactory.sum(
                        DM.medals_totalcsv.SilverMedal,
                        "Total Silver Medals"
                      ),
                    ],
                  }}
                  filters={activeFilters}
                />
              </DashboardCard>
            </Grid>
            <Grid item xs={4}>
              <DashboardCard
                title="Total Bronze Medals"
                gridColumns={12}
                height={100}
              >
                <IndicatorChart
                  dataSet={DM.DataSource}
                  dataOptions={{
                    value: [
                      measureFactory.sum(
                        DM.medals_totalcsv.BronzeMedal,
                        "Total Bronze Medals"
                      ),
                    ],
                  }}
                  filters={activeFilters}
                />
              </DashboardCard>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <DashboardCard title="Breakdown By Country" gridColumns={12}>
                    <ColumnChart
                      dataSet={DM.DataSource}
                      dataOptions={{
                        category: [DM.medals_totalcsv.country_code],
                        value: [
                          measureFactory.sum(
                            DM.medals_totalcsv.GoldMedal,
                            "Total Gold Medals"
                          ),
                          measureFactory.sum(
                            DM.medals_totalcsv.BronzeMedal,
                            "Total Bronze Medals"
                          ),
                          measureFactory.sum(
                            DM.medals_totalcsv.SilverMedal,
                            "Total Silver Medals"
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
                </Grid>
                <Grid item xs={6}>
                  <DashboardCard title="Total Medals By Country" gridColumns={12}>
                    <Chart
                      dataSet={DM.DataSource}
                      chartType="pie"
                      dataOptions={{
                        category: [DM.medals_totalcsv.country_code],
                        value: [
                          measureFactory.sum(
                            DM.medals_totalcsv.Total,
                            "Total Medals by Country"
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
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <DashboardCard title="Geography" gridColumns={12}>
                <ScattermapChart
                  dataSet={DM.DataSource}
                  dataOptions={{
                    geo: [DM.medals_totalcsv.country_code],
                    size: measureFactory.sum(
                      DM.medals_totalcsv.Total,
                      "Medals by Country"
                    ),
                    colorBy: {
                      column: measureFactory.sum(
                        DM.medals_totalcsv.Total,
                        "Color by Medals"
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Medals;
