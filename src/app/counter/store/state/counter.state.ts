export interface CounterStateInterface {
    counter:number|0,
    channelName: string|null
}

export const CounterInitialState: CounterStateInterface = {
    counter: 0,
    channelName:"Initial Channel name"
}


