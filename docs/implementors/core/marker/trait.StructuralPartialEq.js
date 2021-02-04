(function() {var implementors = {};
implementors["identity_core"] = [{"text":"impl StructuralPartialEq for Context","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for OneOrMany&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Timestamp","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Url","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Dereference","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DocumentMetadata","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ErrorKind","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for InputMetadata","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Resolution","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for ResolutionMetadata","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Resource","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for PrimaryResource","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for SecondaryResource","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for MetaDocument","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for Credential&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; StructuralPartialEq for Presentation&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CredentialSchema","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CredentialStatus","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for CredentialSubject","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Evidence","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for IssuerData","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Issuer","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for RefreshService","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for TermsOfUse","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for VerifiableCredential&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; StructuralPartialEq for VerifiablePresentation&lt;T, U&gt;","synthetic":false,"types":[]}];
implementors["identity_diff"] = [{"text":"impl&lt;T, U, V&gt; StructuralPartialEq for DiffDocument&lt;T, U, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Diff + Serialize + for&lt;'__de&gt; Deserialize&lt;'__de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Diff + Serialize + for&lt;'__de&gt; Deserialize&lt;'__de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Diff + Serialize + for&lt;'__de&gt; Deserialize&lt;'__de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for DiffMethod&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Diff,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for DiffMethodRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Diff,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DiffMethodData","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for DiffService&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Diff,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V:&nbsp;Diff&gt; StructuralPartialEq for InnerValue&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Diff, V:&nbsp;Diff&gt; StructuralPartialEq for DiffHashMap&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Diff&gt; StructuralPartialEq for DiffHashSet&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Diff&gt; StructuralPartialEq for InnerValue&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffi8","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffi16","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffi32","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffi64","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffi128","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DiffiSize","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffu8","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffu16","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffu32","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffu64","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffu128","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DiffuSize","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DiffF32","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DiffF64","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffbool","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffchar","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Diffunit","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Diff&gt; StructuralPartialEq for DiffOption&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DiffString","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DiffValue","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Diff&gt; StructuralPartialEq for DiffVec&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Diff&gt; StructuralPartialEq for InnerVec&lt;T&gt;","synthetic":false,"types":[]}];
implementors["identity_iota"] = [{"text":"impl StructuralPartialEq for Network","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for IotaDID","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; StructuralPartialEq for Segments&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for IotaDocument","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DocumentDiff","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for Properties","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for MessageId","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; StructuralPartialEq for CredentialValidation&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; StructuralPartialEq for PresentationValidation&lt;T, U&gt;","synthetic":false,"types":[]},{"text":"impl StructuralPartialEq for DocumentValidation","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()