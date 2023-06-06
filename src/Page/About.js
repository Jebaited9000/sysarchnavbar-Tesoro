import React from 'react'
import styled from "styled-components";

function About() {
  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin-left: 60px;
  margin-bottom: 1000px;
  cursor: pointer;

`
const ButtonGroup = styled.div`
  display: flex;
`

  return (
     <div>
    <center>
                <h1>Jobs Available</h1>
                
                <ButtonGroup>
                <a href="/welcome">
                <Button> Waiter/waitress </Button>
                </a>
                <a href="/welcome">
                <Button> BPO Call Center </Button>
                </a>
                <a href="/welcome">
                <Button> Teacher </Button>
                </a>
                <a href="/welcome">
                <Button> Sales agent </Button>
                </a>
                <a href="/welcome">
                <Button> Software developer </Button>
                </a>
                <a href="/welcome">
                <Button> Project manager </Button>
                </a>
                </ButtonGroup>
                
    </center>
    </div>
  )
}

export default About