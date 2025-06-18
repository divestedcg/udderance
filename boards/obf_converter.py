import sys
import os

parsedBoards = [];

def parseBoardIntoMap(name, file, isSubBoard, subBoardTitle):
	board = open(file, "r");
	parsingSubBoard = False;
	alternateFormat = False;
	result = [subBoardTitle];
	for line in board:
		if "\"label\":" in line:
			label = line.strip().split("\"")[3]
			result.append("\"" + label + "\"");
		if "\"load_board\":" in line:
			parsingSubBoard = True
			#print(line);
		if parsingSubBoard == True and ("\"id\":" in line or "\"path\":" in line):
			#print(line);
			boardId = line.strip().split("\"")[3]
			if "boards/" in boardId:
				boardId = boardId.split("boards/")[1].split(".")[0];
				alternateFormat = True;
			#print("found sub board ");
			#print(boardId);
			lastLabel = result[(len(result) -1)];
			result.pop((len(result) -1));
			if "Top Page" not in lastLabel and boardId not in parsedBoards:
				parsedBoards.append(boardId);
				if alternateFormat == True:
					parseBoardIntoMap(name + "Sub" + boardId, os.path.dirname(file) + "/" + boardId + ".obf", True, lastLabel);
				else:
					parseBoardIntoMap(name + "Sub" + boardId, os.path.dirname(file) + "/board_" + boardId + ".obf", True, lastLabel);
				result.append("phrases" + name + "Sub" + boardId);
		if parsingSubBoard == True and "}," in line:
			parsingSubBoard = False;
			#print("no longer matching sub boards");
	outputLine = "";
	for entry in result:
		needsComma = ", ";
		if result.index(entry) == (len(result) -1):
			needsComma = "";
		outputLine += entry + needsComma;
	if isSubBoard == True:
		print("const phrases" + name + " = [" + outputLine + "];");
	else:
		print("phrases" + name + ".push([" + outputLine + "]);");


boardName = sys.argv[1];
print("const phrases" + boardName + " = [\"" + boardName + "\"];");
parseBoardIntoMap(boardName, sys.argv[2], False, "\"" + boardName + "\"");
