<?php 
    require_once 'base_config.php';



    if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email']) && !empty($_POST['tel']) && !empty($_POST['message'])){// Si il existe les champs email, password et qu'il sont pas vident
        $insertion = $bdd->prepare('INSERT INTO formulaire_contact VALUES(NULL,:nom,:prenom ,:email, :tel, :message, NOW())');
        $insertion->bindValue(':nom',$_POST['nom']);
        $insertion->bindValue(':prenom',$_POST['prenom']);
        $insertion->bindValue(':email',$_POST['email']);
        $insertion->bindValue(':tel',$_POST['tel']);
        $insertion->bindValue(':message',$_POST['message']);        
        $verification = $insertion->execute();
        if($verification) {
            header('Location:index.php?reg_err=success#contact');
            
        }
        else {
            header('Location:index.php?reg_err=failed#contact');
            
        }
    }

    else{
        echo "Une variable n'est pas declare et ou est null";
    }

    // return false;
