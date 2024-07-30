// src/pages/Athletes.tsx
import React, { useState } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import { Chatbot, useGetNlgQueryResult } from "@sisense/sdk-ui/ai";
import { PieChart, BarChart } from "@sisense/sdk-ui";
import * as DM from "../olympics";
import { measureFactory, filterFactory, Filter } from "@sisense/sdk-data";

const AiInsights: React.FC = () => {
  const [goldMedalFilter, setGoldMedalFilter] = useState<Filter | null>(
    filterFactory.topRanking(
      DM.medals_totalcsv.country_code,
      measureFactory.sum(DM.medals_totalcsv.GoldMedal, "Total Gold Medals"),
      5,
    ),
  );

  const [silverMedalFilter, setSilverMedalFilter] = useState<Filter | null>(
    filterFactory.topRanking(
      DM.medals_totalcsv.country_code,
      measureFactory.sum(DM.medals_totalcsv.SilverMedal, "Total Silver Medals"),
      5,
    ),
  );

  const [bronzeMedalFilter, setBronzeMedalFilter] = useState<Filter | null>(
    filterFactory.topRanking(
      DM.medals_totalcsv.country_code,
      measureFactory.sum(DM.medals_totalcsv.BronzeMedal, "Total Bronze Medals"),
      5,
    ),
  );

  const { data: nlgData1, isLoading: isLoading1 } = useGetNlgQueryResult({
    dataSource: DM.DataSource,
    dimensions: [DM.medals_totalcsv.country_code],
    measures: [measureFactory.sum(DM.medals_totalcsv.GoldMedal)],
    filters: [
      filterFactory.topRanking(
        DM.medals_totalcsv.country_code,
        measureFactory.sum(
          DM.medals_totalcsv.BronzeMedal,
          "Total Bronze Medals",
        ),
        5,
      ),
    ],
  });

  const { data: nlgData2, isLoading: isLoading2 } = useGetNlgQueryResult({
    dataSource: DM.DataSource,
    dimensions: [DM.medals_totalcsv.country_code],
    measures: [measureFactory.sum(DM.medals_totalcsv.SilverMedal)],
    filters: [
      filterFactory.topRanking(
        DM.medals_totalcsv.country_code,
        measureFactory.sum(
          DM.medals_totalcsv.SilverMedal,
          "Total Silver Medals",
        ),
        5,
      ),
    ],
  });

  const { data: nlgData3, isLoading: isLoading3 } = useGetNlgQueryResult({
    dataSource: DM.DataSource,
    dimensions: [DM.medals_totalcsv.country_code],
    measures: [measureFactory.sum(DM.medals_totalcsv.BronzeMedal)],
    filters: [
      filterFactory.topRanking(
        DM.medals_totalcsv.country_code,
        measureFactory.sum(
          DM.medals_totalcsv.BronzeMedal,
          "Total Bronze Medals",
        ),
        5,
      ),
    ],
  });

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        padding: "2rem",
        paddingTop: "6rem",
      }}
    >
      <Grid container spacing={4} sx={{ flexGrow: 1, paddingRight: "600px" }}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Using Sisense GenAI NLQ, we are generating insights based on the
            data from the Paris Olympics dataset.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" marginBottom={2}>
            <Box flexBasis="45%" marginRight={2}>
              <Typography variant="h6">Gold Medals</Typography>
              {isLoading1 ? (
                <CircularProgress />
              ) : (
                <Typography variant="body1">{nlgData1}</Typography>
              )}
            </Box>
            <Box flexBasis="55%" marginLeft={10}>
              <BarChart
                dataSet={DM.DataSource}
                dataOptions={{
                  category: [DM.medals_totalcsv.country_code],
                  value: [
                    measureFactory.sum(
                      DM.medals_totalcsv.GoldMedal,
                      "Total Gold Medals",
                    ),
                  ],
                  breakBy: [],
                }}
                filters={goldMedalFilter ? [goldMedalFilter] : []}
                styleOptions={{
                  legend: {
                    enabled: false,
                  },
                  height: 200,
                  width: 250,
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" marginBottom={2}>
            <Box flexBasis="45%" marginRight={10}>
              <Typography variant="h6">Silver Medals</Typography>
              {isLoading2 ? (
                <CircularProgress />
              ) : (
                <Typography variant="body1">{nlgData2}</Typography>
              )}
            </Box>
            <Box flexBasis="55%" marginLeft={2}>
              <BarChart
                dataSet={DM.DataSource}
                dataOptions={{
                  category: [DM.medals_totalcsv.country_code],
                  value: [
                    measureFactory.sum(
                      DM.medals_totalcsv.SilverMedal,
                      "Total Silver Medals",
                    ),
                  ],
                  breakBy: [],
                }}
                filters={silverMedalFilter ? [silverMedalFilter] : []}
                styleOptions={{
                  legend: {
                    enabled: false,
                  },
                  height: 200,
                  width: 250,
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start" marginBottom={2}>
            <Box flexBasis="45%" marginRight={2}>
              <Typography variant="h6">Bronze Medals</Typography>
              {isLoading3 ? (
                <CircularProgress />
              ) : (
                <Typography variant="body1">{nlgData3}</Typography>
              )}
            </Box>
            <Box flexBasis="55%" marginLeft={10}>
              <BarChart
                dataSet={DM.DataSource}
                dataOptions={{
                  category: [DM.medals_totalcsv.country_code],
                  value: [
                    measureFactory.sum(
                      DM.medals_totalcsv.BronzeMedal,
                      "Total Bronze Medals",
                    ),
                  ],
                  breakBy: [],
                }}
                filters={bronzeMedalFilter ? [bronzeMedalFilter] : []}
                styleOptions={{
                  legend: {
                    enabled: false,
                  },
                  height: 200,
                  width: 250,
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "fixed",
          right: 220,
          top: 80,
          height: "850px",
          width: "300px",
          backgroundColor: "#222222",
          zIndex: 1000,
        }}
      >
        <Chatbot
          height="850px"
          width="00px"
          config={{
            enableFollowupQuestions: true,
            numOfRecommendations: 4,
            dataTopicsList: ["Olympics Assistant"],
            inputPromptText: "Ask me anything",
            welcomeText:
              "Welcome to the Paris Olympics 2024 Analytics Chatbot powered by Sisense Compose SDK!",
            enableHeader: true,
            enableInsights: true,
          }}
        />
      </Box>
    </div>
  );
};

export default AiInsights;
