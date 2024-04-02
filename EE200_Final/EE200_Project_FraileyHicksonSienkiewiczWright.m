% -------------------------------------------------------------------------
% Authors: Colby Hickson, Joshua Wright, Kendall Frailey, Reed Sienkiewicz
% Filename: EE200_Project_FraileyHicksonSienkiewiczWright.m
% Course: EE 200
% Semester: Spring 2024
% Assignment: Project
% Description: ?
% Use Model: ?
% -------------------------------------------------------------------------

clc
clear
format compact

% Set global varaibles for each fish type for simplicity
SALMON = 1;
SEABASS = 2;

% Number of neighbors used for comparison
k = 5;

% Prompt the uer for the file name of the training data, then read the file
trainingFName = input("Data File Name: ", 's');
trainingFile = fopen(trainingFName, "r");
