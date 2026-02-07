import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuidv4, validate } from "uuid";
import {create} from 'zustand';



function Todo() {
  const useStore = create(() => {
    count : 0
  })
  const { count } = useStore();
  return (
    <>
      <h1>하이</h1>
      <p>구독자 {count}</p>
      <button onClick={() => {
        useStore.setState({ count : count - 1})
      }}></button>
    </>
  );
}

export default Todo;
