# `zeroTrustAccessPolicy` Submodule <a name="`zeroTrustAccessPolicy` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessPolicy <a name="ZeroTrustAccessPolicy" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicy;

ZeroTrustAccessPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .decision(java.lang.String)
    .include(IResolvable)
    .include(java.util.List<ZeroTrustAccessPolicyInclude>)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .applicationId(java.lang.String)
//  .approvalGroup(IResolvable)
//  .approvalGroup(java.util.List<ZeroTrustAccessPolicyApprovalGroup>)
//  .approvalRequired(java.lang.Boolean)
//  .approvalRequired(IResolvable)
//  .exclude(IResolvable)
//  .exclude(java.util.List<ZeroTrustAccessPolicyExclude>)
//  .id(java.lang.String)
//  .isolationRequired(java.lang.Boolean)
//  .isolationRequired(IResolvable)
//  .precedence(java.lang.Number)
//  .purposeJustificationPrompt(java.lang.String)
//  .purposeJustificationRequired(java.lang.Boolean)
//  .purposeJustificationRequired(IResolvable)
//  .require(IResolvable)
//  .require(java.util.List<ZeroTrustAccessPolicyRequire>)
//  .sessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.decision">decision</a></code> | <code>java.lang.String</code> | Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>></code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The ID of the application the policy is associated with. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.approvalGroup">approvalGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>></code> | approval_group block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>></code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.isolationRequired">isolationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require this application to be served in an isolated browser for users matching this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.precedence">precedence</a></code> | <code>java.lang.Number</code> | The unique precedence for policies on a single application. Required when using `application_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.purposeJustificationPrompt">purposeJustificationPrompt</a></code> | <code>java.lang.String</code> | The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.purposeJustificationRequired">purposeJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to prompt the user for a justification for accessing the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.require">require</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>></code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.decision"></a>

- *Type:* java.lang.String

Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#decision ZeroTrustAccessPolicy#decision}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.include"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>>

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#include ZeroTrustAccessPolicy#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Friendly name of the Access Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#account_id ZeroTrustAccessPolicy#account_id}

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The ID of the application the policy is associated with.

Required when using `precedence`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#application_id ZeroTrustAccessPolicy#application_id}

---

##### `approvalGroup`<sup>Optional</sup> <a name="approvalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.approvalGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>>

approval_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#approval_group ZeroTrustAccessPolicy#approval_group}

---

##### `approvalRequired`<sup>Optional</sup> <a name="approvalRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.approvalRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.exclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>>

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#exclude ZeroTrustAccessPolicy#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationRequired`<sup>Optional</sup> <a name="isolationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.isolationRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require this application to be served in an isolated browser for users matching this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#isolation_required ZeroTrustAccessPolicy#isolation_required}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.precedence"></a>

- *Type:* java.lang.Number

The unique precedence for policies on a single application. Required when using `application_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#precedence ZeroTrustAccessPolicy#precedence}

---

##### `purposeJustificationPrompt`<sup>Optional</sup> <a name="purposeJustificationPrompt" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.purposeJustificationPrompt"></a>

- *Type:* java.lang.String

The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#purpose_justification_prompt ZeroTrustAccessPolicy#purpose_justification_prompt}

---

##### `purposeJustificationRequired`<sup>Optional</sup> <a name="purposeJustificationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.purposeJustificationRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to prompt the user for a justification for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#purpose_justification_required ZeroTrustAccessPolicy#purpose_justification_required}

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.require"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>>

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#require ZeroTrustAccessPolicy#require}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.String

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#session_duration ZeroTrustAccessPolicy#session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#zone_id ZeroTrustAccessPolicy#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putApprovalGroup">putApprovalGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putRequire">putRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApprovalGroup">resetApprovalGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApprovalRequired">resetApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetIsolationRequired">resetIsolationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPrecedence">resetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPurposeJustificationPrompt">resetPurposeJustificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPurposeJustificationRequired">resetPurposeJustificationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetRequire">resetRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalGroup` <a name="putApprovalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putApprovalGroup"></a>

```java
public void putApprovalGroup(IResolvable OR java.util.List<ZeroTrustAccessPolicyApprovalGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putApprovalGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>>

---

##### `putExclude` <a name="putExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putExclude"></a>

```java
public void putExclude(IResolvable OR java.util.List<ZeroTrustAccessPolicyExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putExclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>>

---

##### `putInclude` <a name="putInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putInclude"></a>

```java
public void putInclude(IResolvable OR java.util.List<ZeroTrustAccessPolicyInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>>

---

##### `putRequire` <a name="putRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putRequire"></a>

```java
public void putRequire(IResolvable OR java.util.List<ZeroTrustAccessPolicyRequire> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putRequire.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetApprovalGroup` <a name="resetApprovalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApprovalGroup"></a>

```java
public void resetApprovalGroup()
```

##### `resetApprovalRequired` <a name="resetApprovalRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApprovalRequired"></a>

```java
public void resetApprovalRequired()
```

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIsolationRequired` <a name="resetIsolationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetIsolationRequired"></a>

```java
public void resetIsolationRequired()
```

##### `resetPrecedence` <a name="resetPrecedence" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPrecedence"></a>

```java
public void resetPrecedence()
```

##### `resetPurposeJustificationPrompt` <a name="resetPurposeJustificationPrompt" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPurposeJustificationPrompt"></a>

```java
public void resetPurposeJustificationPrompt()
```

##### `resetPurposeJustificationRequired` <a name="resetPurposeJustificationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPurposeJustificationRequired"></a>

```java
public void resetPurposeJustificationRequired()
```

##### `resetRequire` <a name="resetRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetRequire"></a>

```java
public void resetRequire()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicy;

ZeroTrustAccessPolicy.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicy;

ZeroTrustAccessPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicy;

ZeroTrustAccessPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicy;

ZeroTrustAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalGroup">approvalGroup</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList">ZeroTrustAccessPolicyApprovalGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList">ZeroTrustAccessPolicyExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList">ZeroTrustAccessPolicyIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.require">require</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList">ZeroTrustAccessPolicyRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalGroupInput">approvalGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalRequiredInput">approvalRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.decisionInput">decisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.excludeInput">excludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.includeInput">includeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.isolationRequiredInput">isolationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.precedenceInput">precedenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationPromptInput">purposeJustificationPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationRequiredInput">purposeJustificationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.requireInput">requireInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.decision">decision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.isolationRequired">isolationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationPrompt">purposeJustificationPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationRequired">purposeJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalGroup`<sup>Required</sup> <a name="approvalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalGroup"></a>

```java
public ZeroTrustAccessPolicyApprovalGroupList getApprovalGroup();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList">ZeroTrustAccessPolicyApprovalGroupList</a>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.exclude"></a>

```java
public ZeroTrustAccessPolicyExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList">ZeroTrustAccessPolicyExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.include"></a>

```java
public ZeroTrustAccessPolicyIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList">ZeroTrustAccessPolicyIncludeList</a>

---

##### `require`<sup>Required</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.require"></a>

```java
public ZeroTrustAccessPolicyRequireList getRequire();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList">ZeroTrustAccessPolicyRequireList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `approvalGroupInput`<sup>Optional</sup> <a name="approvalGroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalGroupInput"></a>

```java
public java.lang.Object getApprovalGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>>

---

##### `approvalRequiredInput`<sup>Optional</sup> <a name="approvalRequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalRequiredInput"></a>

```java
public java.lang.Object getApprovalRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decisionInput`<sup>Optional</sup> <a name="decisionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.decisionInput"></a>

```java
public java.lang.String getDecisionInput();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.excludeInput"></a>

```java
public java.lang.Object getExcludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.includeInput"></a>

```java
public java.lang.Object getIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>>

---

##### `isolationRequiredInput`<sup>Optional</sup> <a name="isolationRequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.isolationRequiredInput"></a>

```java
public java.lang.Object getIsolationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.precedenceInput"></a>

```java
public java.lang.Number getPrecedenceInput();
```

- *Type:* java.lang.Number

---

##### `purposeJustificationPromptInput`<sup>Optional</sup> <a name="purposeJustificationPromptInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationPromptInput"></a>

```java
public java.lang.String getPurposeJustificationPromptInput();
```

- *Type:* java.lang.String

---

##### `purposeJustificationRequiredInput`<sup>Optional</sup> <a name="purposeJustificationRequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationRequiredInput"></a>

```java
public java.lang.Object getPurposeJustificationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireInput`<sup>Optional</sup> <a name="requireInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.requireInput"></a>

```java
public java.lang.Object getRequireInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>>

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.sessionDurationInput"></a>

```java
public java.lang.String getSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `approvalRequired`<sup>Required</sup> <a name="approvalRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalRequired"></a>

```java
public java.lang.Object getApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.decision"></a>

```java
public java.lang.String getDecision();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isolationRequired`<sup>Required</sup> <a name="isolationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.isolationRequired"></a>

```java
public java.lang.Object getIsolationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `purposeJustificationPrompt`<sup>Required</sup> <a name="purposeJustificationPrompt" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationPrompt"></a>

```java
public java.lang.String getPurposeJustificationPrompt();
```

- *Type:* java.lang.String

---

##### `purposeJustificationRequired`<sup>Required</sup> <a name="purposeJustificationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationRequired"></a>

```java
public java.lang.Object getPurposeJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessPolicyApprovalGroup <a name="ZeroTrustAccessPolicyApprovalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyApprovalGroup;

ZeroTrustAccessPolicyApprovalGroup.builder()
    .approvalsNeeded(java.lang.Number)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .emailListUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.approvalsNeeded">approvalsNeeded</a></code> | <code>java.lang.Number</code> | Number of approvals needed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of emails to request approval from. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.emailListUuid">emailListUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_list_uuid ZeroTrustAccessPolicy#email_list_uuid}. |

---

##### `approvalsNeeded`<sup>Required</sup> <a name="approvalsNeeded" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.approvalsNeeded"></a>

```java
public java.lang.Number getApprovalsNeeded();
```

- *Type:* java.lang.Number

Number of approvals needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#approvals_needed ZeroTrustAccessPolicy#approvals_needed}

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of emails to request approval from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_addresses ZeroTrustAccessPolicy#email_addresses}

---

##### `emailListUuid`<sup>Optional</sup> <a name="emailListUuid" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.emailListUuid"></a>

```java
public java.lang.String getEmailListUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_list_uuid ZeroTrustAccessPolicy#email_list_uuid}.

---

### ZeroTrustAccessPolicyConfig <a name="ZeroTrustAccessPolicyConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyConfig;

ZeroTrustAccessPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .decision(java.lang.String)
    .include(IResolvable)
    .include(java.util.List<ZeroTrustAccessPolicyInclude>)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .applicationId(java.lang.String)
//  .approvalGroup(IResolvable)
//  .approvalGroup(java.util.List<ZeroTrustAccessPolicyApprovalGroup>)
//  .approvalRequired(java.lang.Boolean)
//  .approvalRequired(IResolvable)
//  .exclude(IResolvable)
//  .exclude(java.util.List<ZeroTrustAccessPolicyExclude>)
//  .id(java.lang.String)
//  .isolationRequired(java.lang.Boolean)
//  .isolationRequired(IResolvable)
//  .precedence(java.lang.Number)
//  .purposeJustificationPrompt(java.lang.String)
//  .purposeJustificationRequired(java.lang.Boolean)
//  .purposeJustificationRequired(IResolvable)
//  .require(IResolvable)
//  .require(java.util.List<ZeroTrustAccessPolicyRequire>)
//  .sessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.decision">decision</a></code> | <code>java.lang.String</code> | Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>></code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The ID of the application the policy is associated with. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.approvalGroup">approvalGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>></code> | approval_group block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>></code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.isolationRequired">isolationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require this application to be served in an isolated browser for users matching this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | The unique precedence for policies on a single application. Required when using `application_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.purposeJustificationPrompt">purposeJustificationPrompt</a></code> | <code>java.lang.String</code> | The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.purposeJustificationRequired">purposeJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to prompt the user for a justification for accessing the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.require">require</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>></code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.decision"></a>

```java
public java.lang.String getDecision();
```

- *Type:* java.lang.String

Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#decision ZeroTrustAccessPolicy#decision}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.include"></a>

```java
public java.lang.Object getInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>>

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#include ZeroTrustAccessPolicy#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Friendly name of the Access Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#account_id ZeroTrustAccessPolicy#account_id}

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The ID of the application the policy is associated with.

Required when using `precedence`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#application_id ZeroTrustAccessPolicy#application_id}

---

##### `approvalGroup`<sup>Optional</sup> <a name="approvalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.approvalGroup"></a>

```java
public java.lang.Object getApprovalGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>>

approval_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#approval_group ZeroTrustAccessPolicy#approval_group}

---

##### `approvalRequired`<sup>Optional</sup> <a name="approvalRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.approvalRequired"></a>

```java
public java.lang.Object getApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.exclude"></a>

```java
public java.lang.Object getExclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>>

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#exclude ZeroTrustAccessPolicy#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationRequired`<sup>Optional</sup> <a name="isolationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.isolationRequired"></a>

```java
public java.lang.Object getIsolationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require this application to be served in an isolated browser for users matching this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#isolation_required ZeroTrustAccessPolicy#isolation_required}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

The unique precedence for policies on a single application. Required when using `application_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#precedence ZeroTrustAccessPolicy#precedence}

---

##### `purposeJustificationPrompt`<sup>Optional</sup> <a name="purposeJustificationPrompt" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.purposeJustificationPrompt"></a>

```java
public java.lang.String getPurposeJustificationPrompt();
```

- *Type:* java.lang.String

The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#purpose_justification_prompt ZeroTrustAccessPolicy#purpose_justification_prompt}

---

##### `purposeJustificationRequired`<sup>Optional</sup> <a name="purposeJustificationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.purposeJustificationRequired"></a>

```java
public java.lang.Object getPurposeJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to prompt the user for a justification for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#purpose_justification_required ZeroTrustAccessPolicy#purpose_justification_required}

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.require"></a>

```java
public java.lang.Object getRequire();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>>

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#require ZeroTrustAccessPolicy#require}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#session_duration ZeroTrustAccessPolicy#session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#zone_id ZeroTrustAccessPolicy#zone_id}

---

### ZeroTrustAccessPolicyExclude <a name="ZeroTrustAccessPolicyExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExclude;

ZeroTrustAccessPolicyExclude.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<ZeroTrustAccessPolicyExcludeAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<ZeroTrustAccessPolicyExcludeAzure>)
//  .certificate(java.lang.Boolean)
//  .certificate(IResolvable)
//  .commonName(java.lang.String)
//  .commonNames(java.util.List<java.lang.String>)
//  .devicePosture(java.util.List<java.lang.String>)
//  .email(java.util.List<java.lang.String>)
//  .emailDomain(java.util.List<java.lang.String>)
//  .emailList(java.util.List<java.lang.String>)
//  .everyone(java.lang.Boolean)
//  .everyone(IResolvable)
//  .externalEvaluation(IResolvable)
//  .externalEvaluation(java.util.List<ZeroTrustAccessPolicyExcludeExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<ZeroTrustAccessPolicyExcludeGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<ZeroTrustAccessPolicyExcludeGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<ZeroTrustAccessPolicyExcludeOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<ZeroTrustAccessPolicyExcludeSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}

---

### ZeroTrustAccessPolicyExcludeAuthContext <a name="ZeroTrustAccessPolicyExcludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeAuthContext;

ZeroTrustAccessPolicyExcludeAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyExcludeAzure <a name="ZeroTrustAccessPolicyExcludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeAzure;

ZeroTrustAccessPolicyExcludeAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyExcludeExternalEvaluation <a name="ZeroTrustAccessPolicyExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeExternalEvaluation;

ZeroTrustAccessPolicyExcludeExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}

---

### ZeroTrustAccessPolicyExcludeGithub <a name="ZeroTrustAccessPolicyExcludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeGithub;

ZeroTrustAccessPolicyExcludeGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}

---

### ZeroTrustAccessPolicyExcludeGsuite <a name="ZeroTrustAccessPolicyExcludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeGsuite;

ZeroTrustAccessPolicyExcludeGsuite.builder()
//  .email(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyExcludeOkta <a name="ZeroTrustAccessPolicyExcludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeOkta;

ZeroTrustAccessPolicyExcludeOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

### ZeroTrustAccessPolicyExcludeSaml <a name="ZeroTrustAccessPolicyExcludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeSaml;

ZeroTrustAccessPolicyExcludeSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyInclude <a name="ZeroTrustAccessPolicyInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyInclude;

ZeroTrustAccessPolicyInclude.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<ZeroTrustAccessPolicyIncludeAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<ZeroTrustAccessPolicyIncludeAzure>)
//  .certificate(java.lang.Boolean)
//  .certificate(IResolvable)
//  .commonName(java.lang.String)
//  .commonNames(java.util.List<java.lang.String>)
//  .devicePosture(java.util.List<java.lang.String>)
//  .email(java.util.List<java.lang.String>)
//  .emailDomain(java.util.List<java.lang.String>)
//  .emailList(java.util.List<java.lang.String>)
//  .everyone(java.lang.Boolean)
//  .everyone(IResolvable)
//  .externalEvaluation(IResolvable)
//  .externalEvaluation(java.util.List<ZeroTrustAccessPolicyIncludeExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<ZeroTrustAccessPolicyIncludeGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<ZeroTrustAccessPolicyIncludeGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<ZeroTrustAccessPolicyIncludeOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<ZeroTrustAccessPolicyIncludeSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}

---

### ZeroTrustAccessPolicyIncludeAuthContext <a name="ZeroTrustAccessPolicyIncludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeAuthContext;

ZeroTrustAccessPolicyIncludeAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyIncludeAzure <a name="ZeroTrustAccessPolicyIncludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeAzure;

ZeroTrustAccessPolicyIncludeAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyIncludeExternalEvaluation <a name="ZeroTrustAccessPolicyIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeExternalEvaluation;

ZeroTrustAccessPolicyIncludeExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}

---

### ZeroTrustAccessPolicyIncludeGithub <a name="ZeroTrustAccessPolicyIncludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeGithub;

ZeroTrustAccessPolicyIncludeGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}

---

### ZeroTrustAccessPolicyIncludeGsuite <a name="ZeroTrustAccessPolicyIncludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeGsuite;

ZeroTrustAccessPolicyIncludeGsuite.builder()
//  .email(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyIncludeOkta <a name="ZeroTrustAccessPolicyIncludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeOkta;

ZeroTrustAccessPolicyIncludeOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

### ZeroTrustAccessPolicyIncludeSaml <a name="ZeroTrustAccessPolicyIncludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeSaml;

ZeroTrustAccessPolicyIncludeSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyRequire <a name="ZeroTrustAccessPolicyRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequire;

ZeroTrustAccessPolicyRequire.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<ZeroTrustAccessPolicyRequireAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<ZeroTrustAccessPolicyRequireAzure>)
//  .certificate(java.lang.Boolean)
//  .certificate(IResolvable)
//  .commonName(java.lang.String)
//  .commonNames(java.util.List<java.lang.String>)
//  .devicePosture(java.util.List<java.lang.String>)
//  .email(java.util.List<java.lang.String>)
//  .emailDomain(java.util.List<java.lang.String>)
//  .emailList(java.util.List<java.lang.String>)
//  .everyone(java.lang.Boolean)
//  .everyone(IResolvable)
//  .externalEvaluation(IResolvable)
//  .externalEvaluation(java.util.List<ZeroTrustAccessPolicyRequireExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<ZeroTrustAccessPolicyRequireGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<ZeroTrustAccessPolicyRequireGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<ZeroTrustAccessPolicyRequireOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<ZeroTrustAccessPolicyRequireSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}

---

### ZeroTrustAccessPolicyRequireAuthContext <a name="ZeroTrustAccessPolicyRequireAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireAuthContext;

ZeroTrustAccessPolicyRequireAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyRequireAzure <a name="ZeroTrustAccessPolicyRequireAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireAzure;

ZeroTrustAccessPolicyRequireAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyRequireExternalEvaluation <a name="ZeroTrustAccessPolicyRequireExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireExternalEvaluation;

ZeroTrustAccessPolicyRequireExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}

---

### ZeroTrustAccessPolicyRequireGithub <a name="ZeroTrustAccessPolicyRequireGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireGithub;

ZeroTrustAccessPolicyRequireGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}

---

### ZeroTrustAccessPolicyRequireGsuite <a name="ZeroTrustAccessPolicyRequireGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireGsuite;

ZeroTrustAccessPolicyRequireGsuite.builder()
//  .email(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyRequireOkta <a name="ZeroTrustAccessPolicyRequireOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireOkta;

ZeroTrustAccessPolicyRequireOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

### ZeroTrustAccessPolicyRequireSaml <a name="ZeroTrustAccessPolicyRequireSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireSaml;

ZeroTrustAccessPolicyRequireSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessPolicyApprovalGroupList <a name="ZeroTrustAccessPolicyApprovalGroupList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyApprovalGroupList;

new ZeroTrustAccessPolicyApprovalGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.get"></a>

```java
public ZeroTrustAccessPolicyApprovalGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>>

---


### ZeroTrustAccessPolicyApprovalGroupOutputReference <a name="ZeroTrustAccessPolicyApprovalGroupOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyApprovalGroupOutputReference;

new ZeroTrustAccessPolicyApprovalGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resetEmailListUuid">resetEmailListUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```

##### `resetEmailListUuid` <a name="resetEmailListUuid" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resetEmailListUuid"></a>

```java
public void resetEmailListUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput">approvalsNeededInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailListUuidInput">emailListUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.approvalsNeeded">approvalsNeeded</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailListUuid">emailListUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvalsNeededInput`<sup>Optional</sup> <a name="approvalsNeededInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput"></a>

```java
public java.lang.Number getApprovalsNeededInput();
```

- *Type:* java.lang.Number

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListUuidInput`<sup>Optional</sup> <a name="emailListUuidInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailListUuidInput"></a>

```java
public java.lang.String getEmailListUuidInput();
```

- *Type:* java.lang.String

---

##### `approvalsNeeded`<sup>Required</sup> <a name="approvalsNeeded" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.approvalsNeeded"></a>

```java
public java.lang.Number getApprovalsNeeded();
```

- *Type:* java.lang.Number

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListUuid`<sup>Required</sup> <a name="emailListUuid" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailListUuid"></a>

```java
public java.lang.String getEmailListUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup">ZeroTrustAccessPolicyApprovalGroup</a>

---


### ZeroTrustAccessPolicyExcludeAuthContextList <a name="ZeroTrustAccessPolicyExcludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeAuthContextList;

new ZeroTrustAccessPolicyExcludeAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.get"></a>

```java
public ZeroTrustAccessPolicyExcludeAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a>>

---


### ZeroTrustAccessPolicyExcludeAuthContextOutputReference <a name="ZeroTrustAccessPolicyExcludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference;

new ZeroTrustAccessPolicyExcludeAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a>

---


### ZeroTrustAccessPolicyExcludeAzureList <a name="ZeroTrustAccessPolicyExcludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeAzureList;

new ZeroTrustAccessPolicyExcludeAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.get"></a>

```java
public ZeroTrustAccessPolicyExcludeAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a>>

---


### ZeroTrustAccessPolicyExcludeAzureOutputReference <a name="ZeroTrustAccessPolicyExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeAzureOutputReference;

new ZeroTrustAccessPolicyExcludeAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a>

---


### ZeroTrustAccessPolicyExcludeExternalEvaluationList <a name="ZeroTrustAccessPolicyExcludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeExternalEvaluationList;

new ZeroTrustAccessPolicyExcludeExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.get"></a>

```java
public ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a>>

---


### ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference <a name="ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference;

new ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a>

---


### ZeroTrustAccessPolicyExcludeGithubList <a name="ZeroTrustAccessPolicyExcludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeGithubList;

new ZeroTrustAccessPolicyExcludeGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.get"></a>

```java
public ZeroTrustAccessPolicyExcludeGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a>>

---


### ZeroTrustAccessPolicyExcludeGithubOutputReference <a name="ZeroTrustAccessPolicyExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeGithubOutputReference;

new ZeroTrustAccessPolicyExcludeGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a>

---


### ZeroTrustAccessPolicyExcludeGsuiteList <a name="ZeroTrustAccessPolicyExcludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeGsuiteList;

new ZeroTrustAccessPolicyExcludeGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.get"></a>

```java
public ZeroTrustAccessPolicyExcludeGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a>>

---


### ZeroTrustAccessPolicyExcludeGsuiteOutputReference <a name="ZeroTrustAccessPolicyExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference;

new ZeroTrustAccessPolicyExcludeGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a>

---


### ZeroTrustAccessPolicyExcludeList <a name="ZeroTrustAccessPolicyExcludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeList;

new ZeroTrustAccessPolicyExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.get"></a>

```java
public ZeroTrustAccessPolicyExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>>

---


### ZeroTrustAccessPolicyExcludeOktaList <a name="ZeroTrustAccessPolicyExcludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeOktaList;

new ZeroTrustAccessPolicyExcludeOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.get"></a>

```java
public ZeroTrustAccessPolicyExcludeOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a>>

---


### ZeroTrustAccessPolicyExcludeOktaOutputReference <a name="ZeroTrustAccessPolicyExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeOktaOutputReference;

new ZeroTrustAccessPolicyExcludeOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a>

---


### ZeroTrustAccessPolicyExcludeOutputReference <a name="ZeroTrustAccessPolicyExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeOutputReference;

new ZeroTrustAccessPolicyExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<ZeroTrustAccessPolicyExcludeAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<ZeroTrustAccessPolicyExcludeAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<ZeroTrustAccessPolicyExcludeExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<ZeroTrustAccessPolicyExcludeGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<ZeroTrustAccessPolicyExcludeGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<ZeroTrustAccessPolicyExcludeOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<ZeroTrustAccessPolicyExcludeSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList">ZeroTrustAccessPolicyExcludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList">ZeroTrustAccessPolicyExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList">ZeroTrustAccessPolicyExcludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList">ZeroTrustAccessPolicyExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList">ZeroTrustAccessPolicyExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList">ZeroTrustAccessPolicyExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList">ZeroTrustAccessPolicyExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authContext"></a>

```java
public ZeroTrustAccessPolicyExcludeAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList">ZeroTrustAccessPolicyExcludeAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.azure"></a>

```java
public ZeroTrustAccessPolicyExcludeAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList">ZeroTrustAccessPolicyExcludeAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.externalEvaluation"></a>

```java
public ZeroTrustAccessPolicyExcludeExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList">ZeroTrustAccessPolicyExcludeExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.github"></a>

```java
public ZeroTrustAccessPolicyExcludeGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList">ZeroTrustAccessPolicyExcludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.gsuite"></a>

```java
public ZeroTrustAccessPolicyExcludeGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList">ZeroTrustAccessPolicyExcludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.okta"></a>

```java
public ZeroTrustAccessPolicyExcludeOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList">ZeroTrustAccessPolicyExcludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.saml"></a>

```java
public ZeroTrustAccessPolicyExcludeSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList">ZeroTrustAccessPolicyExcludeSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext">ZeroTrustAccessPolicyExcludeAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure">ZeroTrustAccessPolicyExcludeAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation">ZeroTrustAccessPolicyExcludeExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub">ZeroTrustAccessPolicyExcludeGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite">ZeroTrustAccessPolicyExcludeGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta">ZeroTrustAccessPolicyExcludeOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude">ZeroTrustAccessPolicyExclude</a>

---


### ZeroTrustAccessPolicyExcludeSamlList <a name="ZeroTrustAccessPolicyExcludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeSamlList;

new ZeroTrustAccessPolicyExcludeSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.get"></a>

```java
public ZeroTrustAccessPolicyExcludeSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a>>

---


### ZeroTrustAccessPolicyExcludeSamlOutputReference <a name="ZeroTrustAccessPolicyExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyExcludeSamlOutputReference;

new ZeroTrustAccessPolicyExcludeSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml">ZeroTrustAccessPolicyExcludeSaml</a>

---


### ZeroTrustAccessPolicyIncludeAuthContextList <a name="ZeroTrustAccessPolicyIncludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeAuthContextList;

new ZeroTrustAccessPolicyIncludeAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.get"></a>

```java
public ZeroTrustAccessPolicyIncludeAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a>>

---


### ZeroTrustAccessPolicyIncludeAuthContextOutputReference <a name="ZeroTrustAccessPolicyIncludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference;

new ZeroTrustAccessPolicyIncludeAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a>

---


### ZeroTrustAccessPolicyIncludeAzureList <a name="ZeroTrustAccessPolicyIncludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeAzureList;

new ZeroTrustAccessPolicyIncludeAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.get"></a>

```java
public ZeroTrustAccessPolicyIncludeAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a>>

---


### ZeroTrustAccessPolicyIncludeAzureOutputReference <a name="ZeroTrustAccessPolicyIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeAzureOutputReference;

new ZeroTrustAccessPolicyIncludeAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a>

---


### ZeroTrustAccessPolicyIncludeExternalEvaluationList <a name="ZeroTrustAccessPolicyIncludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeExternalEvaluationList;

new ZeroTrustAccessPolicyIncludeExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.get"></a>

```java
public ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a>>

---


### ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference <a name="ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference;

new ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a>

---


### ZeroTrustAccessPolicyIncludeGithubList <a name="ZeroTrustAccessPolicyIncludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeGithubList;

new ZeroTrustAccessPolicyIncludeGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.get"></a>

```java
public ZeroTrustAccessPolicyIncludeGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a>>

---


### ZeroTrustAccessPolicyIncludeGithubOutputReference <a name="ZeroTrustAccessPolicyIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeGithubOutputReference;

new ZeroTrustAccessPolicyIncludeGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a>

---


### ZeroTrustAccessPolicyIncludeGsuiteList <a name="ZeroTrustAccessPolicyIncludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeGsuiteList;

new ZeroTrustAccessPolicyIncludeGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.get"></a>

```java
public ZeroTrustAccessPolicyIncludeGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a>>

---


### ZeroTrustAccessPolicyIncludeGsuiteOutputReference <a name="ZeroTrustAccessPolicyIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference;

new ZeroTrustAccessPolicyIncludeGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a>

---


### ZeroTrustAccessPolicyIncludeList <a name="ZeroTrustAccessPolicyIncludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeList;

new ZeroTrustAccessPolicyIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.get"></a>

```java
public ZeroTrustAccessPolicyIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>>

---


### ZeroTrustAccessPolicyIncludeOktaList <a name="ZeroTrustAccessPolicyIncludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeOktaList;

new ZeroTrustAccessPolicyIncludeOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.get"></a>

```java
public ZeroTrustAccessPolicyIncludeOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a>>

---


### ZeroTrustAccessPolicyIncludeOktaOutputReference <a name="ZeroTrustAccessPolicyIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeOktaOutputReference;

new ZeroTrustAccessPolicyIncludeOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a>

---


### ZeroTrustAccessPolicyIncludeOutputReference <a name="ZeroTrustAccessPolicyIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeOutputReference;

new ZeroTrustAccessPolicyIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<ZeroTrustAccessPolicyIncludeAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<ZeroTrustAccessPolicyIncludeAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<ZeroTrustAccessPolicyIncludeExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<ZeroTrustAccessPolicyIncludeGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<ZeroTrustAccessPolicyIncludeGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<ZeroTrustAccessPolicyIncludeOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<ZeroTrustAccessPolicyIncludeSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList">ZeroTrustAccessPolicyIncludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList">ZeroTrustAccessPolicyIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList">ZeroTrustAccessPolicyIncludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList">ZeroTrustAccessPolicyIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList">ZeroTrustAccessPolicyIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList">ZeroTrustAccessPolicyIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList">ZeroTrustAccessPolicyIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authContext"></a>

```java
public ZeroTrustAccessPolicyIncludeAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList">ZeroTrustAccessPolicyIncludeAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.azure"></a>

```java
public ZeroTrustAccessPolicyIncludeAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList">ZeroTrustAccessPolicyIncludeAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.externalEvaluation"></a>

```java
public ZeroTrustAccessPolicyIncludeExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList">ZeroTrustAccessPolicyIncludeExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.github"></a>

```java
public ZeroTrustAccessPolicyIncludeGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList">ZeroTrustAccessPolicyIncludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.gsuite"></a>

```java
public ZeroTrustAccessPolicyIncludeGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList">ZeroTrustAccessPolicyIncludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.okta"></a>

```java
public ZeroTrustAccessPolicyIncludeOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList">ZeroTrustAccessPolicyIncludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.saml"></a>

```java
public ZeroTrustAccessPolicyIncludeSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList">ZeroTrustAccessPolicyIncludeSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext">ZeroTrustAccessPolicyIncludeAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure">ZeroTrustAccessPolicyIncludeAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation">ZeroTrustAccessPolicyIncludeExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub">ZeroTrustAccessPolicyIncludeGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite">ZeroTrustAccessPolicyIncludeGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta">ZeroTrustAccessPolicyIncludeOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude">ZeroTrustAccessPolicyInclude</a>

---


### ZeroTrustAccessPolicyIncludeSamlList <a name="ZeroTrustAccessPolicyIncludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeSamlList;

new ZeroTrustAccessPolicyIncludeSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.get"></a>

```java
public ZeroTrustAccessPolicyIncludeSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a>>

---


### ZeroTrustAccessPolicyIncludeSamlOutputReference <a name="ZeroTrustAccessPolicyIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyIncludeSamlOutputReference;

new ZeroTrustAccessPolicyIncludeSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml">ZeroTrustAccessPolicyIncludeSaml</a>

---


### ZeroTrustAccessPolicyRequireAuthContextList <a name="ZeroTrustAccessPolicyRequireAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireAuthContextList;

new ZeroTrustAccessPolicyRequireAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.get"></a>

```java
public ZeroTrustAccessPolicyRequireAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a>>

---


### ZeroTrustAccessPolicyRequireAuthContextOutputReference <a name="ZeroTrustAccessPolicyRequireAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireAuthContextOutputReference;

new ZeroTrustAccessPolicyRequireAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a>

---


### ZeroTrustAccessPolicyRequireAzureList <a name="ZeroTrustAccessPolicyRequireAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireAzureList;

new ZeroTrustAccessPolicyRequireAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.get"></a>

```java
public ZeroTrustAccessPolicyRequireAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a>>

---


### ZeroTrustAccessPolicyRequireAzureOutputReference <a name="ZeroTrustAccessPolicyRequireAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireAzureOutputReference;

new ZeroTrustAccessPolicyRequireAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a>

---


### ZeroTrustAccessPolicyRequireExternalEvaluationList <a name="ZeroTrustAccessPolicyRequireExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireExternalEvaluationList;

new ZeroTrustAccessPolicyRequireExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.get"></a>

```java
public ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a>>

---


### ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference <a name="ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference;

new ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a>

---


### ZeroTrustAccessPolicyRequireGithubList <a name="ZeroTrustAccessPolicyRequireGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireGithubList;

new ZeroTrustAccessPolicyRequireGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.get"></a>

```java
public ZeroTrustAccessPolicyRequireGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a>>

---


### ZeroTrustAccessPolicyRequireGithubOutputReference <a name="ZeroTrustAccessPolicyRequireGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireGithubOutputReference;

new ZeroTrustAccessPolicyRequireGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a>

---


### ZeroTrustAccessPolicyRequireGsuiteList <a name="ZeroTrustAccessPolicyRequireGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireGsuiteList;

new ZeroTrustAccessPolicyRequireGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.get"></a>

```java
public ZeroTrustAccessPolicyRequireGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a>>

---


### ZeroTrustAccessPolicyRequireGsuiteOutputReference <a name="ZeroTrustAccessPolicyRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireGsuiteOutputReference;

new ZeroTrustAccessPolicyRequireGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a>

---


### ZeroTrustAccessPolicyRequireList <a name="ZeroTrustAccessPolicyRequireList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireList;

new ZeroTrustAccessPolicyRequireList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.get"></a>

```java
public ZeroTrustAccessPolicyRequireOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>>

---


### ZeroTrustAccessPolicyRequireOktaList <a name="ZeroTrustAccessPolicyRequireOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireOktaList;

new ZeroTrustAccessPolicyRequireOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.get"></a>

```java
public ZeroTrustAccessPolicyRequireOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a>>

---


### ZeroTrustAccessPolicyRequireOktaOutputReference <a name="ZeroTrustAccessPolicyRequireOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireOktaOutputReference;

new ZeroTrustAccessPolicyRequireOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a>

---


### ZeroTrustAccessPolicyRequireOutputReference <a name="ZeroTrustAccessPolicyRequireOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireOutputReference;

new ZeroTrustAccessPolicyRequireOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<ZeroTrustAccessPolicyRequireAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<ZeroTrustAccessPolicyRequireAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<ZeroTrustAccessPolicyRequireExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<ZeroTrustAccessPolicyRequireGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<ZeroTrustAccessPolicyRequireGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<ZeroTrustAccessPolicyRequireOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<ZeroTrustAccessPolicyRequireSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList">ZeroTrustAccessPolicyRequireAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList">ZeroTrustAccessPolicyRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList">ZeroTrustAccessPolicyRequireExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList">ZeroTrustAccessPolicyRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList">ZeroTrustAccessPolicyRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList">ZeroTrustAccessPolicyRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList">ZeroTrustAccessPolicyRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authContext"></a>

```java
public ZeroTrustAccessPolicyRequireAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList">ZeroTrustAccessPolicyRequireAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.azure"></a>

```java
public ZeroTrustAccessPolicyRequireAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList">ZeroTrustAccessPolicyRequireAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.externalEvaluation"></a>

```java
public ZeroTrustAccessPolicyRequireExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList">ZeroTrustAccessPolicyRequireExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.github"></a>

```java
public ZeroTrustAccessPolicyRequireGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList">ZeroTrustAccessPolicyRequireGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.gsuite"></a>

```java
public ZeroTrustAccessPolicyRequireGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList">ZeroTrustAccessPolicyRequireGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.okta"></a>

```java
public ZeroTrustAccessPolicyRequireOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList">ZeroTrustAccessPolicyRequireOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.saml"></a>

```java
public ZeroTrustAccessPolicyRequireSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList">ZeroTrustAccessPolicyRequireSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext">ZeroTrustAccessPolicyRequireAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure">ZeroTrustAccessPolicyRequireAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation">ZeroTrustAccessPolicyRequireExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub">ZeroTrustAccessPolicyRequireGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite">ZeroTrustAccessPolicyRequireGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta">ZeroTrustAccessPolicyRequireOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire">ZeroTrustAccessPolicyRequire</a>

---


### ZeroTrustAccessPolicyRequireSamlList <a name="ZeroTrustAccessPolicyRequireSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireSamlList;

new ZeroTrustAccessPolicyRequireSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.get"></a>

```java
public ZeroTrustAccessPolicyRequireSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a>>

---


### ZeroTrustAccessPolicyRequireSamlOutputReference <a name="ZeroTrustAccessPolicyRequireSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_access_policy.ZeroTrustAccessPolicyRequireSamlOutputReference;

new ZeroTrustAccessPolicyRequireSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml">ZeroTrustAccessPolicyRequireSaml</a>

---


