import { ResponsiveLine } from '@nivo/line'
import { useEffect } from 'react'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data ,conf ,tv,name  }) => {
    return(
    <ResponsiveLine
        theme={{
            "background": conf.theme_bg,
            "textColor": conf.theme_fc,
            "fontSize": 10,
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#6a6a6a",
                        "strokeWidth": 1
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#ff0000",
                    "strokeWidth": 0
                }
            }
        }}
        data={data}
        margin={{ top: 50, right: 42, bottom: 50, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={{
        	tickValues:[],
            orient: 'right',
            tickSize: 5,	
            tickPadding: 5,
            tickRotation: 0,
            legend: "Count",
            legendOffset:20,
            legendPosition: 'middle'
        }}
        enableCrosshair={false}
        axisBottom={{
            tickValues:tv.x,
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        enableArea={true}        
        enableGridX={false}
        enableGridY={false}
        axisLeft={null}
        colors={{ scheme: conf.col_sc }}
        pointColor={{ theme: 'background' }}
        pointSize={3}
        // colors={{ datum: '#6C757D' }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        crosshairType="top-left"
        useMesh={true}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                justify: false,
                translateX: -30,
                translateY: -40,
                itemWidth: 11,
                itemHeight: 27,
                itemsSpacing: 4,
                symbolSize: 19,
                symbolShape: 'circle',
                itemDirection: 'left-to-right',
                itemTextColor: '#777',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
    }

export default MyResponsiveLine
