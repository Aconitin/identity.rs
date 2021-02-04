(function() {var implementors = {};
implementors["identity_core"] = [{"text":"impl Clone for Context","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for OneOrMany&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Timestamp","synthetic":false,"types":[]},{"text":"impl Clone for Url","synthetic":false,"types":[]},{"text":"impl Clone for PublicKey","synthetic":false,"types":[]},{"text":"impl Clone for SecretKey","synthetic":false,"types":[]},{"text":"impl Clone for KeyPair","synthetic":false,"types":[]},{"text":"impl Clone for JcsEd25519Signature2020","synthetic":false,"types":[]},{"text":"impl Clone for Dereference","synthetic":false,"types":[]},{"text":"impl Clone for DocumentMetadata","synthetic":false,"types":[]},{"text":"impl Clone for ErrorKind","synthetic":false,"types":[]},{"text":"impl Clone for InputMetadata","synthetic":false,"types":[]},{"text":"impl Clone for Resolution","synthetic":false,"types":[]},{"text":"impl Clone for ResolutionMetadata","synthetic":false,"types":[]},{"text":"impl Clone for Resource","synthetic":false,"types":[]},{"text":"impl Clone for PrimaryResource","synthetic":false,"types":[]},{"text":"impl Clone for SecondaryResource","synthetic":false,"types":[]},{"text":"impl Clone for MetaDocument","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Credential&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for CredentialBuilder&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, U:&nbsp;Clone&gt; Clone for Presentation&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, U:&nbsp;Clone&gt; Clone for PresentationBuilder&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl Clone for CredentialSchema","synthetic":false,"types":[]},{"text":"impl Clone for CredentialStatus","synthetic":false,"types":[]},{"text":"impl Clone for CredentialSubject","synthetic":false,"types":[]},{"text":"impl Clone for Evidence","synthetic":false,"types":[]},{"text":"impl Clone for IssuerData","synthetic":false,"types":[]},{"text":"impl Clone for Issuer","synthetic":false,"types":[]},{"text":"impl Clone for RefreshService","synthetic":false,"types":[]},{"text":"impl Clone for TermsOfUse","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for VerifiableCredential&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, U:&nbsp;Clone&gt; Clone for VerifiablePresentation&lt;T, U&gt;","synthetic":false,"types":[]}];
implementors["identity_derive"] = [{"text":"impl Clone for InputModel","synthetic":false,"types":[]},{"text":"impl Clone for InputEnum","synthetic":false,"types":[]},{"text":"impl Clone for InputStruct","synthetic":false,"types":[]},{"text":"impl Clone for EVariant","synthetic":false,"types":[]},{"text":"impl Clone for SVariant","synthetic":false,"types":[]},{"text":"impl Clone for DataFields","synthetic":false,"types":[]}];
implementors["identity_diff"] = [{"text":"impl&lt;T:&nbsp;Clone, U:&nbsp;Clone, V:&nbsp;Clone&gt; Clone for DiffDocument&lt;T, U, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Diff + Serialize + for&lt;'__de&gt; Deserialize&lt;'__de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Diff + Serialize + for&lt;'__de&gt; Deserialize&lt;'__de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Diff + Serialize + for&lt;'__de&gt; Deserialize&lt;'__de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for DiffMethod&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Diff,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for DiffMethodRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Diff,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for DiffMethodData","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for DiffService&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Diff,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Clone, V:&nbsp;Clone + Diff&gt; Clone for InnerValue&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Clone + Diff, V:&nbsp;Clone + Diff&gt; Clone for DiffHashMap&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Diff&gt; Clone for DiffHashSet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Diff&gt; Clone for InnerValue&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Diffi8","synthetic":false,"types":[]},{"text":"impl Clone for Diffi16","synthetic":false,"types":[]},{"text":"impl Clone for Diffi32","synthetic":false,"types":[]},{"text":"impl Clone for Diffi64","synthetic":false,"types":[]},{"text":"impl Clone for Diffi128","synthetic":false,"types":[]},{"text":"impl Clone for DiffiSize","synthetic":false,"types":[]},{"text":"impl Clone for Diffu8","synthetic":false,"types":[]},{"text":"impl Clone for Diffu16","synthetic":false,"types":[]},{"text":"impl Clone for Diffu32","synthetic":false,"types":[]},{"text":"impl Clone for Diffu64","synthetic":false,"types":[]},{"text":"impl Clone for Diffu128","synthetic":false,"types":[]},{"text":"impl Clone for DiffuSize","synthetic":false,"types":[]},{"text":"impl Clone for DiffF32","synthetic":false,"types":[]},{"text":"impl Clone for DiffF64","synthetic":false,"types":[]},{"text":"impl Clone for Diffbool","synthetic":false,"types":[]},{"text":"impl Clone for Diffchar","synthetic":false,"types":[]},{"text":"impl Clone for Diffunit","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Diff&gt; Clone for DiffOption&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for DiffString","synthetic":false,"types":[]},{"text":"impl Clone for DiffValue","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Diff&gt; Clone for DiffVec&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Diff&gt; Clone for InnerVec&lt;T&gt;","synthetic":false,"types":[]}];
implementors["identity_iota"] = [{"text":"impl Clone for Client","synthetic":false,"types":[]},{"text":"impl Clone for ClientBuilder","synthetic":false,"types":[]},{"text":"impl Clone for Network","synthetic":false,"types":[]},{"text":"impl Clone for IotaDID","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for Segments&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for IotaDocument","synthetic":false,"types":[]},{"text":"impl Clone for IotaDocumentBuilder","synthetic":false,"types":[]},{"text":"impl Clone for DocumentDiff","synthetic":false,"types":[]},{"text":"impl Clone for Properties","synthetic":false,"types":[]},{"text":"impl Clone for MessageId","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for MessageIndex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for CredentialValidation&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone, U:&nbsp;Clone&gt; Clone for PresentationValidation&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl Clone for DocumentValidation","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for CredentialValidator&lt;'a&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()