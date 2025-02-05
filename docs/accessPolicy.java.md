# `accessPolicy` Submodule <a name="`accessPolicy` Submodule" id="@cdktf/provider-cloudflare.accessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPolicy <a name="AccessPolicy" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy cloudflare_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicy;

AccessPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .include(java.util.List<AccessPolicyInclude>)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .applicationId(java.lang.String)
//  .approvalGroup(IResolvable)
//  .approvalGroup(java.util.List<AccessPolicyApprovalGroup>)
//  .approvalRequired(java.lang.Boolean)
//  .approvalRequired(IResolvable)
//  .connectionRules(AccessPolicyConnectionRules)
//  .exclude(IResolvable)
//  .exclude(java.util.List<AccessPolicyExclude>)
//  .id(java.lang.String)
//  .isolationRequired(java.lang.Boolean)
//  .isolationRequired(IResolvable)
//  .precedence(java.lang.Number)
//  .purposeJustificationPrompt(java.lang.String)
//  .purposeJustificationRequired(java.lang.Boolean)
//  .purposeJustificationRequired(IResolvable)
//  .require(IResolvable)
//  .require(java.util.List<AccessPolicyRequire>)
//  .sessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.decision">decision</a></code> | <code>java.lang.String</code> | Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>></code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The ID of the application the policy is associated with. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.approvalGroup">approvalGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>></code> | approval_group block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.connectionRules">connectionRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a></code> | connection_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>></code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.isolationRequired">isolationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require this application to be served in an isolated browser for users matching this policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.precedence">precedence</a></code> | <code>java.lang.Number</code> | The unique precedence for policies on a single application. Required when using `application_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.purposeJustificationPrompt">purposeJustificationPrompt</a></code> | <code>java.lang.String</code> | The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.purposeJustificationRequired">purposeJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to prompt the user for a justification for accessing the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.require">require</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>></code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.decision"></a>

- *Type:* java.lang.String

Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#decision AccessPolicy#decision}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.include"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>>

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#include AccessPolicy#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Friendly name of the Access Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#name AccessPolicy#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#account_id AccessPolicy#account_id}

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

The ID of the application the policy is associated with.

Required when using `precedence`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#application_id AccessPolicy#application_id}

---

##### `approvalGroup`<sup>Optional</sup> <a name="approvalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.approvalGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>>

approval_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#approval_group AccessPolicy#approval_group}

---

##### `approvalRequired`<sup>Optional</sup> <a name="approvalRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.approvalRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}.

---

##### `connectionRules`<sup>Optional</sup> <a name="connectionRules" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.connectionRules"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a>

connection_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#connection_rules AccessPolicy#connection_rules}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.exclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>>

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#exclude AccessPolicy#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationRequired`<sup>Optional</sup> <a name="isolationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.isolationRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require this application to be served in an isolated browser for users matching this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#isolation_required AccessPolicy#isolation_required}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.precedence"></a>

- *Type:* java.lang.Number

The unique precedence for policies on a single application. Required when using `application_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#precedence AccessPolicy#precedence}

---

##### `purposeJustificationPrompt`<sup>Optional</sup> <a name="purposeJustificationPrompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.purposeJustificationPrompt"></a>

- *Type:* java.lang.String

The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#purpose_justification_prompt AccessPolicy#purpose_justification_prompt}

---

##### `purposeJustificationRequired`<sup>Optional</sup> <a name="purposeJustificationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.purposeJustificationRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to prompt the user for a justification for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#purpose_justification_required AccessPolicy#purpose_justification_required}

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.require"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>>

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#require AccessPolicy#require}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.sessionDuration"></a>

- *Type:* java.lang.String

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#session_duration AccessPolicy#session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#zone_id AccessPolicy#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup">putApprovalGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putConnectionRules">putConnectionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire">putRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalGroup">resetApprovalGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalRequired">resetApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetConnectionRules">resetConnectionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetIsolationRequired">resetIsolationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPrecedence">resetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationPrompt">resetPurposeJustificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationRequired">resetPurposeJustificationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetRequire">resetRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalGroup` <a name="putApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup"></a>

```java
public void putApprovalGroup(IResolvable OR java.util.List<AccessPolicyApprovalGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>>

---

##### `putConnectionRules` <a name="putConnectionRules" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putConnectionRules"></a>

```java
public void putConnectionRules(AccessPolicyConnectionRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putConnectionRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a>

---

##### `putExclude` <a name="putExclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude"></a>

```java
public void putExclude(IResolvable OR java.util.List<AccessPolicyExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>>

---

##### `putInclude` <a name="putInclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude"></a>

```java
public void putInclude(IResolvable OR java.util.List<AccessPolicyInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>>

---

##### `putRequire` <a name="putRequire" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire"></a>

```java
public void putRequire(IResolvable OR java.util.List<AccessPolicyRequire> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetApprovalGroup` <a name="resetApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalGroup"></a>

```java
public void resetApprovalGroup()
```

##### `resetApprovalRequired` <a name="resetApprovalRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalRequired"></a>

```java
public void resetApprovalRequired()
```

##### `resetConnectionRules` <a name="resetConnectionRules" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetConnectionRules"></a>

```java
public void resetConnectionRules()
```

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIsolationRequired` <a name="resetIsolationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetIsolationRequired"></a>

```java
public void resetIsolationRequired()
```

##### `resetPrecedence` <a name="resetPrecedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPrecedence"></a>

```java
public void resetPrecedence()
```

##### `resetPurposeJustificationPrompt` <a name="resetPurposeJustificationPrompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationPrompt"></a>

```java
public void resetPurposeJustificationPrompt()
```

##### `resetPurposeJustificationRequired` <a name="resetPurposeJustificationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationRequired"></a>

```java
public void resetPurposeJustificationRequired()
```

##### `resetRequire` <a name="resetRequire" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetRequire"></a>

```java
public void resetRequire()
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetSessionDuration"></a>

```java
public void resetSessionDuration()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicy;

AccessPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicy;

AccessPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicy;

AccessPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicy;

AccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroup">approvalGroup</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList">AccessPolicyApprovalGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connectionRules">connectionRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference">AccessPolicyConnectionRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList">AccessPolicyExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList">AccessPolicyIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.require">require</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList">AccessPolicyRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroupInput">approvalGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequiredInput">approvalRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connectionRulesInput">connectionRulesInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decisionInput">decisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.excludeInput">excludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.includeInput">includeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.isolationRequiredInput">isolationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedenceInput">precedenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPromptInput">purposeJustificationPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequiredInput">purposeJustificationRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.requireInput">requireInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.sessionDurationInput">sessionDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decision">decision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.isolationRequired">isolationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPrompt">purposeJustificationPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequired">purposeJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approvalGroup`<sup>Required</sup> <a name="approvalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroup"></a>

```java
public AccessPolicyApprovalGroupList getApprovalGroup();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList">AccessPolicyApprovalGroupList</a>

---

##### `connectionRules`<sup>Required</sup> <a name="connectionRules" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connectionRules"></a>

```java
public AccessPolicyConnectionRulesOutputReference getConnectionRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference">AccessPolicyConnectionRulesOutputReference</a>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.exclude"></a>

```java
public AccessPolicyExcludeList getExclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList">AccessPolicyExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.include"></a>

```java
public AccessPolicyIncludeList getInclude();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList">AccessPolicyIncludeList</a>

---

##### `require`<sup>Required</sup> <a name="require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.require"></a>

```java
public AccessPolicyRequireList getRequire();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList">AccessPolicyRequireList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `approvalGroupInput`<sup>Optional</sup> <a name="approvalGroupInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroupInput"></a>

```java
public java.lang.Object getApprovalGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>>

---

##### `approvalRequiredInput`<sup>Optional</sup> <a name="approvalRequiredInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequiredInput"></a>

```java
public java.lang.Object getApprovalRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionRulesInput`<sup>Optional</sup> <a name="connectionRulesInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connectionRulesInput"></a>

```java
public AccessPolicyConnectionRules getConnectionRulesInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a>

---

##### `decisionInput`<sup>Optional</sup> <a name="decisionInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decisionInput"></a>

```java
public java.lang.String getDecisionInput();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.excludeInput"></a>

```java
public java.lang.Object getExcludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.includeInput"></a>

```java
public java.lang.Object getIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>>

---

##### `isolationRequiredInput`<sup>Optional</sup> <a name="isolationRequiredInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.isolationRequiredInput"></a>

```java
public java.lang.Object getIsolationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedenceInput"></a>

```java
public java.lang.Number getPrecedenceInput();
```

- *Type:* java.lang.Number

---

##### `purposeJustificationPromptInput`<sup>Optional</sup> <a name="purposeJustificationPromptInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPromptInput"></a>

```java
public java.lang.String getPurposeJustificationPromptInput();
```

- *Type:* java.lang.String

---

##### `purposeJustificationRequiredInput`<sup>Optional</sup> <a name="purposeJustificationRequiredInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequiredInput"></a>

```java
public java.lang.Object getPurposeJustificationRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireInput`<sup>Optional</sup> <a name="requireInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.requireInput"></a>

```java
public java.lang.Object getRequireInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>>

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.sessionDurationInput"></a>

```java
public java.lang.String getSessionDurationInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `approvalRequired`<sup>Required</sup> <a name="approvalRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequired"></a>

```java
public java.lang.Object getApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decision"></a>

```java
public java.lang.String getDecision();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isolationRequired`<sup>Required</sup> <a name="isolationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.isolationRequired"></a>

```java
public java.lang.Object getIsolationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `purposeJustificationPrompt`<sup>Required</sup> <a name="purposeJustificationPrompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPrompt"></a>

```java
public java.lang.String getPurposeJustificationPrompt();
```

- *Type:* java.lang.String

---

##### `purposeJustificationRequired`<sup>Required</sup> <a name="purposeJustificationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequired"></a>

```java
public java.lang.Object getPurposeJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPolicyApprovalGroup <a name="AccessPolicyApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyApprovalGroup;

AccessPolicyApprovalGroup.builder()
    .approvalsNeeded(java.lang.Number)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .emailListUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.approvalsNeeded">approvalsNeeded</a></code> | <code>java.lang.Number</code> | Number of approvals needed. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of emails to request approval from. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailListUuid">emailListUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_list_uuid AccessPolicy#email_list_uuid}. |

---

##### `approvalsNeeded`<sup>Required</sup> <a name="approvalsNeeded" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.approvalsNeeded"></a>

```java
public java.lang.Number getApprovalsNeeded();
```

- *Type:* java.lang.Number

Number of approvals needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#approvals_needed AccessPolicy#approvals_needed}

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of emails to request approval from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_addresses AccessPolicy#email_addresses}

---

##### `emailListUuid`<sup>Optional</sup> <a name="emailListUuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailListUuid"></a>

```java
public java.lang.String getEmailListUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_list_uuid AccessPolicy#email_list_uuid}.

---

### AccessPolicyConfig <a name="AccessPolicyConfig" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyConfig;

AccessPolicyConfig.builder()
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
    .include(java.util.List<AccessPolicyInclude>)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .applicationId(java.lang.String)
//  .approvalGroup(IResolvable)
//  .approvalGroup(java.util.List<AccessPolicyApprovalGroup>)
//  .approvalRequired(java.lang.Boolean)
//  .approvalRequired(IResolvable)
//  .connectionRules(AccessPolicyConnectionRules)
//  .exclude(IResolvable)
//  .exclude(java.util.List<AccessPolicyExclude>)
//  .id(java.lang.String)
//  .isolationRequired(java.lang.Boolean)
//  .isolationRequired(IResolvable)
//  .precedence(java.lang.Number)
//  .purposeJustificationPrompt(java.lang.String)
//  .purposeJustificationRequired(java.lang.Boolean)
//  .purposeJustificationRequired(IResolvable)
//  .require(IResolvable)
//  .require(java.util.List<AccessPolicyRequire>)
//  .sessionDuration(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.decision">decision</a></code> | <code>java.lang.String</code> | Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.include">include</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>></code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Friendly name of the Access Policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | The ID of the application the policy is associated with. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalGroup">approvalGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>></code> | approval_group block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalRequired">approvalRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.connectionRules">connectionRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a></code> | connection_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.exclude">exclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>></code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.isolationRequired">isolationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require this application to be served in an isolated browser for users matching this policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | The unique precedence for policies on a single application. Required when using `application_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationPrompt">purposeJustificationPrompt</a></code> | <code>java.lang.String</code> | The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationRequired">purposeJustificationRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to prompt the user for a justification for accessing the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.require">require</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>></code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.String</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.decision"></a>

```java
public java.lang.String getDecision();
```

- *Type:* java.lang.String

Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#decision AccessPolicy#decision}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.include"></a>

```java
public java.lang.Object getInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>>

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#include AccessPolicy#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Friendly name of the Access Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#name AccessPolicy#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#account_id AccessPolicy#account_id}

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

The ID of the application the policy is associated with.

Required when using `precedence`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#application_id AccessPolicy#application_id}

---

##### `approvalGroup`<sup>Optional</sup> <a name="approvalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalGroup"></a>

```java
public java.lang.Object getApprovalGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>>

approval_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#approval_group AccessPolicy#approval_group}

---

##### `approvalRequired`<sup>Optional</sup> <a name="approvalRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalRequired"></a>

```java
public java.lang.Object getApprovalRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}.

---

##### `connectionRules`<sup>Optional</sup> <a name="connectionRules" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.connectionRules"></a>

```java
public AccessPolicyConnectionRules getConnectionRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a>

connection_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#connection_rules AccessPolicy#connection_rules}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.exclude"></a>

```java
public java.lang.Object getExclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>>

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#exclude AccessPolicy#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolationRequired`<sup>Optional</sup> <a name="isolationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.isolationRequired"></a>

```java
public java.lang.Object getIsolationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require this application to be served in an isolated browser for users matching this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#isolation_required AccessPolicy#isolation_required}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

The unique precedence for policies on a single application. Required when using `application_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#precedence AccessPolicy#precedence}

---

##### `purposeJustificationPrompt`<sup>Optional</sup> <a name="purposeJustificationPrompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationPrompt"></a>

```java
public java.lang.String getPurposeJustificationPrompt();
```

- *Type:* java.lang.String

The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#purpose_justification_prompt AccessPolicy#purpose_justification_prompt}

---

##### `purposeJustificationRequired`<sup>Optional</sup> <a name="purposeJustificationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationRequired"></a>

```java
public java.lang.Object getPurposeJustificationRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to prompt the user for a justification for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#purpose_justification_required AccessPolicy#purpose_justification_required}

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.require"></a>

```java
public java.lang.Object getRequire();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>>

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#require AccessPolicy#require}

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.sessionDuration"></a>

```java
public java.lang.String getSessionDuration();
```

- *Type:* java.lang.String

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#session_duration AccessPolicy#session_duration}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#zone_id AccessPolicy#zone_id}

---

### AccessPolicyConnectionRules <a name="AccessPolicyConnectionRules" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyConnectionRules;

AccessPolicyConnectionRules.builder()
    .ssh(AccessPolicyConnectionRulesSsh)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules.property.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh">AccessPolicyConnectionRulesSsh</a></code> | ssh block. |

---

##### `ssh`<sup>Required</sup> <a name="ssh" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules.property.ssh"></a>

```java
public AccessPolicyConnectionRulesSsh getSsh();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh">AccessPolicyConnectionRulesSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ssh AccessPolicy#ssh}

---

### AccessPolicyConnectionRulesSsh <a name="AccessPolicyConnectionRulesSsh" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyConnectionRulesSsh;

AccessPolicyConnectionRulesSsh.builder()
    .usernames(java.util.List<java.lang.String>)
//  .allowEmailAlias(java.lang.Boolean)
//  .allowEmailAlias(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh.property.usernames">usernames</a></code> | <code>java.util.List<java.lang.String></code> | Contains the Unix usernames that may be used when connecting over SSH. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh.property.allowEmailAlias">allowEmailAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows connecting to Unix username that matches the authenticating email prefix. |

---

##### `usernames`<sup>Required</sup> <a name="usernames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh.property.usernames"></a>

```java
public java.util.List<java.lang.String> getUsernames();
```

- *Type:* java.util.List<java.lang.String>

Contains the Unix usernames that may be used when connecting over SSH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#usernames AccessPolicy#usernames}

---

##### `allowEmailAlias`<sup>Optional</sup> <a name="allowEmailAlias" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh.property.allowEmailAlias"></a>

```java
public java.lang.Object getAllowEmailAlias();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows connecting to Unix username that matches the authenticating email prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#allow_email_alias AccessPolicy#allow_email_alias}

---

### AccessPolicyExclude <a name="AccessPolicyExclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExclude;

AccessPolicyExclude.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<AccessPolicyExcludeAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<AccessPolicyExcludeAzure>)
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
//  .externalEvaluation(java.util.List<AccessPolicyExcludeExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<AccessPolicyExcludeGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<AccessPolicyExcludeGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<AccessPolicyExcludeOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<AccessPolicyExcludeSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#auth_context AccessPolicy#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#certificate AccessPolicy#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#common_name AccessPolicy#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#common_names AccessPolicy#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email AccessPolicy#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_list AccessPolicy#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#everyone AccessPolicy#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#geo AccessPolicy#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#group AccessPolicy#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ip AccessPolicy#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#login_method AccessPolicy#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#service_token AccessPolicy#service_token}

---

### AccessPolicyExcludeAuthContext <a name="AccessPolicyExcludeAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeAuthContext;

AccessPolicyExcludeAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ac_id AccessPolicy#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyExcludeAzure <a name="AccessPolicyExcludeAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeAzure;

AccessPolicyExcludeAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyExcludeExternalEvaluation <a name="AccessPolicyExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeExternalEvaluation;

AccessPolicyExcludeExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}

---

### AccessPolicyExcludeGithub <a name="AccessPolicyExcludeGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeGithub;

AccessPolicyExcludeGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#name AccessPolicy#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#teams AccessPolicy#teams}

---

### AccessPolicyExcludeGsuite <a name="AccessPolicyExcludeGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeGsuite;

AccessPolicyExcludeGsuite.builder()
    .email(java.util.List<java.lang.String>)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email AccessPolicy#email}

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyExcludeOkta <a name="AccessPolicyExcludeOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeOkta;

AccessPolicyExcludeOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#name AccessPolicy#name}

---

### AccessPolicyExcludeSaml <a name="AccessPolicyExcludeSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeSaml;

AccessPolicyExcludeSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyInclude <a name="AccessPolicyInclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyInclude;

AccessPolicyInclude.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<AccessPolicyIncludeAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<AccessPolicyIncludeAzure>)
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
//  .externalEvaluation(java.util.List<AccessPolicyIncludeExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<AccessPolicyIncludeGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<AccessPolicyIncludeGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<AccessPolicyIncludeOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<AccessPolicyIncludeSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#auth_context AccessPolicy#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#certificate AccessPolicy#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#common_name AccessPolicy#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#common_names AccessPolicy#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email AccessPolicy#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_list AccessPolicy#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#everyone AccessPolicy#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#geo AccessPolicy#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#group AccessPolicy#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ip AccessPolicy#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#login_method AccessPolicy#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#service_token AccessPolicy#service_token}

---

### AccessPolicyIncludeAuthContext <a name="AccessPolicyIncludeAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeAuthContext;

AccessPolicyIncludeAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ac_id AccessPolicy#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyIncludeAzure <a name="AccessPolicyIncludeAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeAzure;

AccessPolicyIncludeAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyIncludeExternalEvaluation <a name="AccessPolicyIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeExternalEvaluation;

AccessPolicyIncludeExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}

---

### AccessPolicyIncludeGithub <a name="AccessPolicyIncludeGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeGithub;

AccessPolicyIncludeGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#name AccessPolicy#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#teams AccessPolicy#teams}

---

### AccessPolicyIncludeGsuite <a name="AccessPolicyIncludeGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeGsuite;

AccessPolicyIncludeGsuite.builder()
    .email(java.util.List<java.lang.String>)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email AccessPolicy#email}

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyIncludeOkta <a name="AccessPolicyIncludeOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeOkta;

AccessPolicyIncludeOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#name AccessPolicy#name}

---

### AccessPolicyIncludeSaml <a name="AccessPolicyIncludeSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeSaml;

AccessPolicyIncludeSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyRequire <a name="AccessPolicyRequire" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequire;

AccessPolicyRequire.builder()
//  .anyValidServiceToken(java.lang.Boolean)
//  .anyValidServiceToken(IResolvable)
//  .authContext(IResolvable)
//  .authContext(java.util.List<AccessPolicyRequireAuthContext>)
//  .authMethod(java.lang.String)
//  .azure(IResolvable)
//  .azure(java.util.List<AccessPolicyRequireAzure>)
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
//  .externalEvaluation(java.util.List<AccessPolicyRequireExternalEvaluation>)
//  .geo(java.util.List<java.lang.String>)
//  .github(IResolvable)
//  .github(java.util.List<AccessPolicyRequireGithub>)
//  .group(java.util.List<java.lang.String>)
//  .gsuite(IResolvable)
//  .gsuite(java.util.List<AccessPolicyRequireGsuite>)
//  .ip(java.util.List<java.lang.String>)
//  .ipList(java.util.List<java.lang.String>)
//  .loginMethod(java.util.List<java.lang.String>)
//  .okta(IResolvable)
//  .okta(java.util.List<AccessPolicyRequireOkta>)
//  .saml(IResolvable)
//  .saml(java.util.List<AccessPolicyRequireSaml>)
//  .serviceToken(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.authContext">authContext</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a>></code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.azure">azure</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>></code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.externalEvaluation">externalEvaluation</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.github">github</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>></code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.gsuite">gsuite</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>></code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.okta">okta</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>></code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.saml">saml</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>></code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | The ID of an Access service token. |

---

##### `anyValidServiceToken`<sup>Optional</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}

---

##### `authContext`<sup>Optional</sup> <a name="authContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.authContext"></a>

```java
public java.lang.Object getAuthContext();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a>>

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#auth_context AccessPolicy#auth_context}

---

##### `authMethod`<sup>Optional</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.azure"></a>

```java
public java.lang.Object getAzure();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#certificate AccessPolicy#certificate}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#common_name AccessPolicy#common_name}

---

##### `commonNames`<sup>Optional</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#common_names AccessPolicy#common_names}

---

##### `devicePosture`<sup>Optional</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email AccessPolicy#email}

---

##### `emailDomain`<sup>Optional</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}

---

##### `emailList`<sup>Optional</sup> <a name="emailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email_list AccessPolicy#email_list}

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#everyone AccessPolicy#everyone}

---

##### `externalEvaluation`<sup>Optional</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.externalEvaluation"></a>

```java
public java.lang.Object getExternalEvaluation();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#geo AccessPolicy#geo}

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.github"></a>

```java
public java.lang.Object getGithub();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>>

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#group AccessPolicy#group}

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.gsuite"></a>

```java
public java.lang.Object getGsuite();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>>

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ip AccessPolicy#ip}

---

##### `ipList`<sup>Optional</sup> <a name="ipList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}

---

##### `loginMethod`<sup>Optional</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#login_method AccessPolicy#login_method}

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.okta"></a>

```java
public java.lang.Object getOkta();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>>

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.saml"></a>

```java
public java.lang.Object getSaml();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#service_token AccessPolicy#service_token}

---

### AccessPolicyRequireAuthContext <a name="AccessPolicyRequireAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireAuthContext;

AccessPolicyRequireAuthContext.builder()
    .acId(java.lang.String)
    .id(java.lang.String)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext.property.acId">acId</a></code> | <code>java.lang.String</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#ac_id AccessPolicy#ac_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyRequireAzure <a name="AccessPolicyRequireAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireAzure;

AccessPolicyRequireAzure.builder()
//  .id(java.util.List<java.lang.String>)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of the Azure identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyRequireExternalEvaluation <a name="AccessPolicyRequireExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireExternalEvaluation;

AccessPolicyRequireExternalEvaluation.builder()
//  .evaluateUrl(java.lang.String)
//  .keysUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `evaluateUrl`<sup>Optional</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}

---

##### `keysUrl`<sup>Optional</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}

---

### AccessPolicyRequireGithub <a name="AccessPolicyRequireGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireGithub;

AccessPolicyRequireGithub.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.lang.String)
//  .teams(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.name">name</a></code> | <code>java.lang.String</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | The teams that should be matched. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#name AccessPolicy#name}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#teams AccessPolicy#teams}

---

### AccessPolicyRequireGsuite <a name="AccessPolicyRequireGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireGsuite;

AccessPolicyRequireGsuite.builder()
    .email(java.util.List<java.lang.String>)
    .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Google Workspace identity provider. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#email AccessPolicy#email}

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyRequireOkta <a name="AccessPolicyRequireOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireOkta;

AccessPolicyRequireOkta.builder()
//  .identityProviderId(java.lang.String)
//  .name(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | The name of the Okta Group. |

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#name AccessPolicy#name}

---

### AccessPolicyRequireSaml <a name="AccessPolicyRequireSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireSaml;

AccessPolicyRequireSaml.builder()
//  .attributeName(java.lang.String)
//  .attributeValue(java.lang.String)
//  .identityProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | The ID of your SAML identity provider. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}

---

##### `identityProviderId`<sup>Optional</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPolicyApprovalGroupList <a name="AccessPolicyApprovalGroupList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyApprovalGroupList;

new AccessPolicyApprovalGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get"></a>

```java
public AccessPolicyApprovalGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>>

---


### AccessPolicyApprovalGroupOutputReference <a name="AccessPolicyApprovalGroupOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyApprovalGroupOutputReference;

new AccessPolicyApprovalGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailListUuid">resetEmailListUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```

##### `resetEmailListUuid` <a name="resetEmailListUuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailListUuid"></a>

```java
public void resetEmailListUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput">approvalsNeededInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuidInput">emailListUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeeded">approvalsNeeded</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuid">emailListUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvalsNeededInput`<sup>Optional</sup> <a name="approvalsNeededInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput"></a>

```java
public java.lang.Number getApprovalsNeededInput();
```

- *Type:* java.lang.Number

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListUuidInput`<sup>Optional</sup> <a name="emailListUuidInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuidInput"></a>

```java
public java.lang.String getEmailListUuidInput();
```

- *Type:* java.lang.String

---

##### `approvalsNeeded`<sup>Required</sup> <a name="approvalsNeeded" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeeded"></a>

```java
public java.lang.Number getApprovalsNeeded();
```

- *Type:* java.lang.Number

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListUuid`<sup>Required</sup> <a name="emailListUuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuid"></a>

```java
public java.lang.String getEmailListUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>

---


### AccessPolicyConnectionRulesOutputReference <a name="AccessPolicyConnectionRulesOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyConnectionRulesOutputReference;

new AccessPolicyConnectionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.putSsh">putSsh</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsh` <a name="putSsh" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.putSsh"></a>

```java
public void putSsh(AccessPolicyConnectionRulesSsh value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.putSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh">AccessPolicyConnectionRulesSsh</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.ssh">ssh</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference">AccessPolicyConnectionRulesSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.sshInput">sshInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh">AccessPolicyConnectionRulesSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssh`<sup>Required</sup> <a name="ssh" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.ssh"></a>

```java
public AccessPolicyConnectionRulesSshOutputReference getSsh();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference">AccessPolicyConnectionRulesSshOutputReference</a>

---

##### `sshInput`<sup>Optional</sup> <a name="sshInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.sshInput"></a>

```java
public AccessPolicyConnectionRulesSsh getSshInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh">AccessPolicyConnectionRulesSsh</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesOutputReference.property.internalValue"></a>

```java
public AccessPolicyConnectionRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRules">AccessPolicyConnectionRules</a>

---


### AccessPolicyConnectionRulesSshOutputReference <a name="AccessPolicyConnectionRulesSshOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyConnectionRulesSshOutputReference;

new AccessPolicyConnectionRulesSshOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.resetAllowEmailAlias">resetAllowEmailAlias</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowEmailAlias` <a name="resetAllowEmailAlias" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.resetAllowEmailAlias"></a>

```java
public void resetAllowEmailAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.allowEmailAliasInput">allowEmailAliasInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.usernamesInput">usernamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.allowEmailAlias">allowEmailAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.usernames">usernames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh">AccessPolicyConnectionRulesSsh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowEmailAliasInput`<sup>Optional</sup> <a name="allowEmailAliasInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.allowEmailAliasInput"></a>

```java
public java.lang.Object getAllowEmailAliasInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernamesInput`<sup>Optional</sup> <a name="usernamesInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.usernamesInput"></a>

```java
public java.util.List<java.lang.String> getUsernamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowEmailAlias`<sup>Required</sup> <a name="allowEmailAlias" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.allowEmailAlias"></a>

```java
public java.lang.Object getAllowEmailAlias();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usernames`<sup>Required</sup> <a name="usernames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.usernames"></a>

```java
public java.util.List<java.lang.String> getUsernames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSshOutputReference.property.internalValue"></a>

```java
public AccessPolicyConnectionRulesSsh getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConnectionRulesSsh">AccessPolicyConnectionRulesSsh</a>

---


### AccessPolicyExcludeAuthContextList <a name="AccessPolicyExcludeAuthContextList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeAuthContextList;

new AccessPolicyExcludeAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.get"></a>

```java
public AccessPolicyExcludeAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a>>

---


### AccessPolicyExcludeAuthContextOutputReference <a name="AccessPolicyExcludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeAuthContextOutputReference;

new AccessPolicyExcludeAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a>

---


### AccessPolicyExcludeAzureList <a name="AccessPolicyExcludeAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeAzureList;

new AccessPolicyExcludeAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get"></a>

```java
public AccessPolicyExcludeAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>>

---


### AccessPolicyExcludeAzureOutputReference <a name="AccessPolicyExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeAzureOutputReference;

new AccessPolicyExcludeAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>

---


### AccessPolicyExcludeExternalEvaluationList <a name="AccessPolicyExcludeExternalEvaluationList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeExternalEvaluationList;

new AccessPolicyExcludeExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.get"></a>

```java
public AccessPolicyExcludeExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>>

---


### AccessPolicyExcludeExternalEvaluationOutputReference <a name="AccessPolicyExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeExternalEvaluationOutputReference;

new AccessPolicyExcludeExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>

---


### AccessPolicyExcludeGithubList <a name="AccessPolicyExcludeGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeGithubList;

new AccessPolicyExcludeGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get"></a>

```java
public AccessPolicyExcludeGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>>

---


### AccessPolicyExcludeGithubOutputReference <a name="AccessPolicyExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeGithubOutputReference;

new AccessPolicyExcludeGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>

---


### AccessPolicyExcludeGsuiteList <a name="AccessPolicyExcludeGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeGsuiteList;

new AccessPolicyExcludeGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get"></a>

```java
public AccessPolicyExcludeGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>>

---


### AccessPolicyExcludeGsuiteOutputReference <a name="AccessPolicyExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeGsuiteOutputReference;

new AccessPolicyExcludeGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>

---


### AccessPolicyExcludeList <a name="AccessPolicyExcludeList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeList;

new AccessPolicyExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get"></a>

```java
public AccessPolicyExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>>

---


### AccessPolicyExcludeOktaList <a name="AccessPolicyExcludeOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeOktaList;

new AccessPolicyExcludeOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get"></a>

```java
public AccessPolicyExcludeOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>>

---


### AccessPolicyExcludeOktaOutputReference <a name="AccessPolicyExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeOktaOutputReference;

new AccessPolicyExcludeOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>

---


### AccessPolicyExcludeOutputReference <a name="AccessPolicyExcludeOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeOutputReference;

new AccessPolicyExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<AccessPolicyExcludeAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<AccessPolicyExcludeAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<AccessPolicyExcludeExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<AccessPolicyExcludeGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<AccessPolicyExcludeGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<AccessPolicyExcludeOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<AccessPolicyExcludeSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList">AccessPolicyExcludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList">AccessPolicyExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList">AccessPolicyExcludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList">AccessPolicyExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList">AccessPolicyExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList">AccessPolicyExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList">AccessPolicyExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authContext"></a>

```java
public AccessPolicyExcludeAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContextList">AccessPolicyExcludeAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azure"></a>

```java
public AccessPolicyExcludeAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList">AccessPolicyExcludeAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluation"></a>

```java
public AccessPolicyExcludeExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationList">AccessPolicyExcludeExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.github"></a>

```java
public AccessPolicyExcludeGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList">AccessPolicyExcludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuite"></a>

```java
public AccessPolicyExcludeGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList">AccessPolicyExcludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.okta"></a>

```java
public AccessPolicyExcludeOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList">AccessPolicyExcludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.saml"></a>

```java
public AccessPolicyExcludeSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList">AccessPolicyExcludeSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAuthContext">AccessPolicyExcludeAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>

---


### AccessPolicyExcludeSamlList <a name="AccessPolicyExcludeSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeSamlList;

new AccessPolicyExcludeSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get"></a>

```java
public AccessPolicyExcludeSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>>

---


### AccessPolicyExcludeSamlOutputReference <a name="AccessPolicyExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyExcludeSamlOutputReference;

new AccessPolicyExcludeSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>

---


### AccessPolicyIncludeAuthContextList <a name="AccessPolicyIncludeAuthContextList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeAuthContextList;

new AccessPolicyIncludeAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.get"></a>

```java
public AccessPolicyIncludeAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a>>

---


### AccessPolicyIncludeAuthContextOutputReference <a name="AccessPolicyIncludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeAuthContextOutputReference;

new AccessPolicyIncludeAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a>

---


### AccessPolicyIncludeAzureList <a name="AccessPolicyIncludeAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeAzureList;

new AccessPolicyIncludeAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get"></a>

```java
public AccessPolicyIncludeAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>>

---


### AccessPolicyIncludeAzureOutputReference <a name="AccessPolicyIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeAzureOutputReference;

new AccessPolicyIncludeAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>

---


### AccessPolicyIncludeExternalEvaluationList <a name="AccessPolicyIncludeExternalEvaluationList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeExternalEvaluationList;

new AccessPolicyIncludeExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.get"></a>

```java
public AccessPolicyIncludeExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>>

---


### AccessPolicyIncludeExternalEvaluationOutputReference <a name="AccessPolicyIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeExternalEvaluationOutputReference;

new AccessPolicyIncludeExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>

---


### AccessPolicyIncludeGithubList <a name="AccessPolicyIncludeGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeGithubList;

new AccessPolicyIncludeGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get"></a>

```java
public AccessPolicyIncludeGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>>

---


### AccessPolicyIncludeGithubOutputReference <a name="AccessPolicyIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeGithubOutputReference;

new AccessPolicyIncludeGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>

---


### AccessPolicyIncludeGsuiteList <a name="AccessPolicyIncludeGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeGsuiteList;

new AccessPolicyIncludeGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get"></a>

```java
public AccessPolicyIncludeGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>>

---


### AccessPolicyIncludeGsuiteOutputReference <a name="AccessPolicyIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeGsuiteOutputReference;

new AccessPolicyIncludeGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>

---


### AccessPolicyIncludeList <a name="AccessPolicyIncludeList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeList;

new AccessPolicyIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get"></a>

```java
public AccessPolicyIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>>

---


### AccessPolicyIncludeOktaList <a name="AccessPolicyIncludeOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeOktaList;

new AccessPolicyIncludeOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get"></a>

```java
public AccessPolicyIncludeOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>>

---


### AccessPolicyIncludeOktaOutputReference <a name="AccessPolicyIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeOktaOutputReference;

new AccessPolicyIncludeOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>

---


### AccessPolicyIncludeOutputReference <a name="AccessPolicyIncludeOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeOutputReference;

new AccessPolicyIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<AccessPolicyIncludeAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<AccessPolicyIncludeAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<AccessPolicyIncludeExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<AccessPolicyIncludeGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<AccessPolicyIncludeGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<AccessPolicyIncludeOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<AccessPolicyIncludeSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList">AccessPolicyIncludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList">AccessPolicyIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList">AccessPolicyIncludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList">AccessPolicyIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList">AccessPolicyIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList">AccessPolicyIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList">AccessPolicyIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authContext"></a>

```java
public AccessPolicyIncludeAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContextList">AccessPolicyIncludeAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azure"></a>

```java
public AccessPolicyIncludeAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList">AccessPolicyIncludeAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluation"></a>

```java
public AccessPolicyIncludeExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationList">AccessPolicyIncludeExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.github"></a>

```java
public AccessPolicyIncludeGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList">AccessPolicyIncludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuite"></a>

```java
public AccessPolicyIncludeGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList">AccessPolicyIncludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.okta"></a>

```java
public AccessPolicyIncludeOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList">AccessPolicyIncludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.saml"></a>

```java
public AccessPolicyIncludeSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList">AccessPolicyIncludeSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAuthContext">AccessPolicyIncludeAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>

---


### AccessPolicyIncludeSamlList <a name="AccessPolicyIncludeSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeSamlList;

new AccessPolicyIncludeSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get"></a>

```java
public AccessPolicyIncludeSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>>

---


### AccessPolicyIncludeSamlOutputReference <a name="AccessPolicyIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyIncludeSamlOutputReference;

new AccessPolicyIncludeSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>

---


### AccessPolicyRequireAuthContextList <a name="AccessPolicyRequireAuthContextList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireAuthContextList;

new AccessPolicyRequireAuthContextList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.get"></a>

```java
public AccessPolicyRequireAuthContextOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a>>

---


### AccessPolicyRequireAuthContextOutputReference <a name="AccessPolicyRequireAuthContextOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireAuthContextOutputReference;

new AccessPolicyRequireAuthContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.acIdInput">acIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.acId">acId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acIdInput`<sup>Optional</sup> <a name="acIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.acIdInput"></a>

```java
public java.lang.String getAcIdInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `acId`<sup>Required</sup> <a name="acId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.acId"></a>

```java
public java.lang.String getAcId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a>

---


### AccessPolicyRequireAzureList <a name="AccessPolicyRequireAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireAzureList;

new AccessPolicyRequireAzureList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get"></a>

```java
public AccessPolicyRequireAzureOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>>

---


### AccessPolicyRequireAzureOutputReference <a name="AccessPolicyRequireAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireAzureOutputReference;

new AccessPolicyRequireAzureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.idInput">idInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.id">id</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.idInput"></a>

```java
public java.util.List<java.lang.String> getIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.id"></a>

```java
public java.util.List<java.lang.String> getId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>

---


### AccessPolicyRequireExternalEvaluationList <a name="AccessPolicyRequireExternalEvaluationList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireExternalEvaluationList;

new AccessPolicyRequireExternalEvaluationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.get"></a>

```java
public AccessPolicyRequireExternalEvaluationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>>

---


### AccessPolicyRequireExternalEvaluationOutputReference <a name="AccessPolicyRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireExternalEvaluationOutputReference;

new AccessPolicyRequireExternalEvaluationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl">resetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl">resetKeysUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluateUrl` <a name="resetEvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```java
public void resetEvaluateUrl()
```

##### `resetKeysUrl` <a name="resetKeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```java
public void resetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput">evaluateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput">keysUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl">evaluateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl">keysUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateUrlInput`<sup>Optional</sup> <a name="evaluateUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```java
public java.lang.String getEvaluateUrlInput();
```

- *Type:* java.lang.String

---

##### `keysUrlInput`<sup>Optional</sup> <a name="keysUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```java
public java.lang.String getKeysUrlInput();
```

- *Type:* java.lang.String

---

##### `evaluateUrl`<sup>Required</sup> <a name="evaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```java
public java.lang.String getEvaluateUrl();
```

- *Type:* java.lang.String

---

##### `keysUrl`<sup>Required</sup> <a name="keysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```java
public java.lang.String getKeysUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>

---


### AccessPolicyRequireGithubList <a name="AccessPolicyRequireGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireGithubList;

new AccessPolicyRequireGithubList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get"></a>

```java
public AccessPolicyRequireGithubOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>>

---


### AccessPolicyRequireGithubOutputReference <a name="AccessPolicyRequireGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireGithubOutputReference;

new AccessPolicyRequireGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetTeams"></a>

```java
public void resetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teams">teams</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teamsInput"></a>

```java
public java.util.List<java.lang.String> getTeamsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teams"></a>

```java
public java.util.List<java.lang.String> getTeams();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>

---


### AccessPolicyRequireGsuiteList <a name="AccessPolicyRequireGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireGsuiteList;

new AccessPolicyRequireGsuiteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get"></a>

```java
public AccessPolicyRequireGsuiteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>>

---


### AccessPolicyRequireGsuiteOutputReference <a name="AccessPolicyRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireGsuiteOutputReference;

new AccessPolicyRequireGsuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>

---


### AccessPolicyRequireList <a name="AccessPolicyRequireList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireList;

new AccessPolicyRequireList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get"></a>

```java
public AccessPolicyRequireOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>>

---


### AccessPolicyRequireOktaList <a name="AccessPolicyRequireOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireOktaList;

new AccessPolicyRequireOktaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get"></a>

```java
public AccessPolicyRequireOktaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>>

---


### AccessPolicyRequireOktaOutputReference <a name="AccessPolicyRequireOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireOktaOutputReference;

new AccessPolicyRequireOktaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.nameInput">nameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.name">name</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.nameInput"></a>

```java
public java.util.List<java.lang.String> getNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.name"></a>

```java
public java.util.List<java.lang.String> getName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>

---


### AccessPolicyRequireOutputReference <a name="AccessPolicyRequireOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireOutputReference;

new AccessPolicyRequireOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAuthContext">putAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation">putExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite">putGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta">putOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAnyValidServiceToken">resetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAuthContext">resetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAuthMethod">resetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCommonNames">resetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetDevicePosture">resetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmailDomain">resetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmailList">resetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEveryone">resetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetExternalEvaluation">resetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGeo">resetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGsuite">resetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIpList">resetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetLoginMethod">resetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetOkta">resetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetServiceToken">resetServiceToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthContext` <a name="putAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAuthContext"></a>

```java
public void putAuthContext(IResolvable OR java.util.List<AccessPolicyRequireAuthContext> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAuthContext.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a>>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure"></a>

```java
public void putAzure(IResolvable OR java.util.List<AccessPolicyRequireAzure> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>>

---

##### `putExternalEvaluation` <a name="putExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation"></a>

```java
public void putExternalEvaluation(IResolvable OR java.util.List<AccessPolicyRequireExternalEvaluation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>>

---

##### `putGithub` <a name="putGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub"></a>

```java
public void putGithub(IResolvable OR java.util.List<AccessPolicyRequireGithub> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>>

---

##### `putGsuite` <a name="putGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite"></a>

```java
public void putGsuite(IResolvable OR java.util.List<AccessPolicyRequireGsuite> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>>

---

##### `putOkta` <a name="putOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta"></a>

```java
public void putOkta(IResolvable OR java.util.List<AccessPolicyRequireOkta> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml"></a>

```java
public void putSaml(IResolvable OR java.util.List<AccessPolicyRequireSaml> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>>

---

##### `resetAnyValidServiceToken` <a name="resetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAnyValidServiceToken"></a>

```java
public void resetAnyValidServiceToken()
```

##### `resetAuthContext` <a name="resetAuthContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAuthContext"></a>

```java
public void resetAuthContext()
```

##### `resetAuthMethod` <a name="resetAuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAuthMethod"></a>

```java
public void resetAuthMethod()
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAzure"></a>

```java
public void resetAzure()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetCommonNames` <a name="resetCommonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCommonNames"></a>

```java
public void resetCommonNames()
```

##### `resetDevicePosture` <a name="resetDevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetDevicePosture"></a>

```java
public void resetDevicePosture()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetEmailDomain` <a name="resetEmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmailDomain"></a>

```java
public void resetEmailDomain()
```

##### `resetEmailList` <a name="resetEmailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmailList"></a>

```java
public void resetEmailList()
```

##### `resetEveryone` <a name="resetEveryone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEveryone"></a>

```java
public void resetEveryone()
```

##### `resetExternalEvaluation` <a name="resetExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetExternalEvaluation"></a>

```java
public void resetExternalEvaluation()
```

##### `resetGeo` <a name="resetGeo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGeo"></a>

```java
public void resetGeo()
```

##### `resetGithub` <a name="resetGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGsuite` <a name="resetGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGsuite"></a>

```java
public void resetGsuite()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetIpList` <a name="resetIpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIpList"></a>

```java
public void resetIpList()
```

##### `resetLoginMethod` <a name="resetLoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetLoginMethod"></a>

```java
public void resetLoginMethod()
```

##### `resetOkta` <a name="resetOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetOkta"></a>

```java
public void resetOkta()
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetSaml"></a>

```java
public void resetSaml()
```

##### `resetServiceToken` <a name="resetServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetServiceToken"></a>

```java
public void resetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authContext">authContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList">AccessPolicyRequireAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList">AccessPolicyRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluation">externalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList">AccessPolicyRequireExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList">AccessPolicyRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList">AccessPolicyRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList">AccessPolicyRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList">AccessPolicyRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceTokenInput">anyValidServiceTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authContextInput">authContextInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethodInput">authMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azureInput">azureInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePostureInput">devicePostureInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomainInput">emailDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailInput">emailInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailListInput">emailListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyoneInput">everyoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluationInput">externalEvaluationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geoInput">geoInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.githubInput">githubInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuiteInput">gsuiteInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipInput">ipInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipListInput">ipListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethodInput">loginMethodInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.oktaInput">oktaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.samlInput">samlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceToken">anyValidServiceToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificate">certificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNames">commonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePosture">devicePosture</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.email">email</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomain">emailDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailList">emailList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyone">everyone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geo">geo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ip">ip</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipList">ipList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethod">loginMethod</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceToken">serviceToken</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authContext`<sup>Required</sup> <a name="authContext" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authContext"></a>

```java
public AccessPolicyRequireAuthContextList getAuthContext();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContextList">AccessPolicyRequireAuthContextList</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azure"></a>

```java
public AccessPolicyRequireAzureList getAzure();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList">AccessPolicyRequireAzureList</a>

---

##### `externalEvaluation`<sup>Required</sup> <a name="externalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluation"></a>

```java
public AccessPolicyRequireExternalEvaluationList getExternalEvaluation();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationList">AccessPolicyRequireExternalEvaluationList</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.github"></a>

```java
public AccessPolicyRequireGithubList getGithub();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList">AccessPolicyRequireGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuite"></a>

```java
public AccessPolicyRequireGsuiteList getGsuite();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList">AccessPolicyRequireGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.okta"></a>

```java
public AccessPolicyRequireOktaList getOkta();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList">AccessPolicyRequireOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.saml"></a>

```java
public AccessPolicyRequireSamlList getSaml();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList">AccessPolicyRequireSamlList</a>

---

##### `anyValidServiceTokenInput`<sup>Optional</sup> <a name="anyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceTokenInput"></a>

```java
public java.lang.Object getAnyValidServiceTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authContextInput`<sup>Optional</sup> <a name="authContextInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authContextInput"></a>

```java
public java.lang.Object getAuthContextInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAuthContext">AccessPolicyRequireAuthContext</a>>

---

##### `authMethodInput`<sup>Optional</sup> <a name="authMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethodInput"></a>

```java
public java.lang.String getAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azureInput"></a>

```java
public java.lang.Object getAzureInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificateInput"></a>

```java
public java.lang.Object getCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNamesInput"></a>

```java
public java.util.List<java.lang.String> getCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePostureInput`<sup>Optional</sup> <a name="devicePostureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePostureInput"></a>

```java
public java.util.List<java.lang.String> getDevicePostureInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomainInput`<sup>Optional</sup> <a name="emailDomainInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomainInput"></a>

```java
public java.util.List<java.lang.String> getEmailDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailInput"></a>

```java
public java.util.List<java.lang.String> getEmailInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailListInput`<sup>Optional</sup> <a name="emailListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailListInput"></a>

```java
public java.util.List<java.lang.String> getEmailListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyoneInput`<sup>Optional</sup> <a name="everyoneInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyoneInput"></a>

```java
public java.lang.Object getEveryoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEvaluationInput`<sup>Optional</sup> <a name="externalEvaluationInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluationInput"></a>

```java
public java.lang.Object getExternalEvaluationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>>

---

##### `geoInput`<sup>Optional</sup> <a name="geoInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geoInput"></a>

```java
public java.util.List<java.lang.String> getGeoInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.githubInput"></a>

```java
public java.lang.Object getGithubInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gsuiteInput`<sup>Optional</sup> <a name="gsuiteInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuiteInput"></a>

```java
public java.lang.Object getGsuiteInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipInput"></a>

```java
public java.util.List<java.lang.String> getIpInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipListInput`<sup>Optional</sup> <a name="ipListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipListInput"></a>

```java
public java.util.List<java.lang.String> getIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethodInput`<sup>Optional</sup> <a name="loginMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethodInput"></a>

```java
public java.util.List<java.lang.String> getLoginMethodInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oktaInput`<sup>Optional</sup> <a name="oktaInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.oktaInput"></a>

```java
public java.lang.Object getOktaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>>

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.samlInput"></a>

```java
public java.lang.Object getSamlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>>

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceTokenInput"></a>

```java
public java.util.List<java.lang.String> getServiceTokenInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyValidServiceToken`<sup>Required</sup> <a name="anyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceToken"></a>

```java
public java.lang.Object getAnyValidServiceToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificate"></a>

```java
public java.lang.Object getCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNames"></a>

```java
public java.util.List<java.lang.String> getCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicePosture`<sup>Required</sup> <a name="devicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePosture"></a>

```java
public java.util.List<java.lang.String> getDevicePosture();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.email"></a>

```java
public java.util.List<java.lang.String> getEmail();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailDomain`<sup>Required</sup> <a name="emailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomain"></a>

```java
public java.util.List<java.lang.String> getEmailDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailList`<sup>Required</sup> <a name="emailList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailList"></a>

```java
public java.util.List<java.lang.String> getEmailList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyone"></a>

```java
public java.lang.Object getEveryone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geo"></a>

```java
public java.util.List<java.lang.String> getGeo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ip"></a>

```java
public java.util.List<java.lang.String> getIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipList`<sup>Required</sup> <a name="ipList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipList"></a>

```java
public java.util.List<java.lang.String> getIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginMethod`<sup>Required</sup> <a name="loginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethod"></a>

```java
public java.util.List<java.lang.String> getLoginMethod();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceToken"></a>

```java
public java.util.List<java.lang.String> getServiceToken();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>

---


### AccessPolicyRequireSamlList <a name="AccessPolicyRequireSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireSamlList;

new AccessPolicyRequireSamlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get"></a>

```java
public AccessPolicyRequireSamlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>>

---


### AccessPolicyRequireSamlOutputReference <a name="AccessPolicyRequireSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.access_policy.AccessPolicyRequireSamlOutputReference;

new AccessPolicyRequireSamlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetIdentityProviderId">resetIdentityProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeName"></a>

```java
public void resetAttributeName()
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeValue"></a>

```java
public void resetAttributeValue()
```

##### `resetIdentityProviderId` <a name="resetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetIdentityProviderId"></a>

```java
public void resetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValue">attributeValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeNameInput"></a>

```java
public java.lang.String getAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValueInput"></a>

```java
public java.lang.String getAttributeValueInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValue"></a>

```java
public java.lang.String getAttributeValue();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>

---



