# `cloudflare_access_policy`

Refer to the Terraform Registory for docs: [`cloudflare_access_policy`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy).

# `accessPolicy` Submodule <a name="`accessPolicy` Submodule" id="@cdktf/provider-cloudflare.accessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPolicy <a name="AccessPolicy" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy cloudflare_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicy(Construct Scope, string Id, AccessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig">AccessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig">AccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup">PutApprovalGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire">PutRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalGroup">ResetApprovalGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalRequired">ResetApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationPrompt">ResetPurposeJustificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationRequired">ResetPurposeJustificationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetRequire">ResetRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutApprovalGroup` <a name="PutApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup"></a>

```csharp
private void PutApprovalGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup.parameter.value"></a>

- *Type:* object

---

##### `PutExclude` <a name="PutExclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude"></a>

```csharp
private void PutExclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude.parameter.value"></a>

- *Type:* object

---

##### `PutInclude` <a name="PutInclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude"></a>

```csharp
private void PutInclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude.parameter.value"></a>

- *Type:* object

---

##### `PutRequire` <a name="PutRequire" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire"></a>

```csharp
private void PutRequire(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetApprovalGroup` <a name="ResetApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalGroup"></a>

```csharp
private void ResetApprovalGroup()
```

##### `ResetApprovalRequired` <a name="ResetApprovalRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalRequired"></a>

```csharp
private void ResetApprovalRequired()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPurposeJustificationPrompt` <a name="ResetPurposeJustificationPrompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationPrompt"></a>

```csharp
private void ResetPurposeJustificationPrompt()
```

##### `ResetPurposeJustificationRequired` <a name="ResetPurposeJustificationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationRequired"></a>

```csharp
private void ResetPurposeJustificationRequired()
```

##### `ResetRequire` <a name="ResetRequire" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetRequire"></a>

```csharp
private void ResetRequire()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

AccessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroup">ApprovalGroup</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList">AccessPolicyApprovalGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList">AccessPolicyExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList">AccessPolicyIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.require">Require</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList">AccessPolicyRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroupInput">ApprovalGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequiredInput">ApprovalRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decisionInput">DecisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.excludeInput">ExcludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.includeInput">IncludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedenceInput">PrecedenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPromptInput">PurposeJustificationPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequiredInput">PurposeJustificationRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.requireInput">RequireInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequired">ApprovalRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decision">Decision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedence">Precedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPrompt">PurposeJustificationPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequired">PurposeJustificationRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApprovalGroup`<sup>Required</sup> <a name="ApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroup"></a>

```csharp
public AccessPolicyApprovalGroupList ApprovalGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList">AccessPolicyApprovalGroupList</a>

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.exclude"></a>

```csharp
public AccessPolicyExcludeList Exclude { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList">AccessPolicyExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.include"></a>

```csharp
public AccessPolicyIncludeList Include { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList">AccessPolicyIncludeList</a>

---

##### `Require`<sup>Required</sup> <a name="Require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.require"></a>

```csharp
public AccessPolicyRequireList Require { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList">AccessPolicyRequireList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ApprovalGroupInput`<sup>Optional</sup> <a name="ApprovalGroupInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroupInput"></a>

```csharp
public object ApprovalGroupInput { get; }
```

- *Type:* object

---

##### `ApprovalRequiredInput`<sup>Optional</sup> <a name="ApprovalRequiredInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequiredInput"></a>

```csharp
public object ApprovalRequiredInput { get; }
```

- *Type:* object

---

##### `DecisionInput`<sup>Optional</sup> <a name="DecisionInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decisionInput"></a>

```csharp
public string DecisionInput { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.excludeInput"></a>

```csharp
public object ExcludeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.includeInput"></a>

```csharp
public object IncludeInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedenceInput"></a>

```csharp
public double PrecedenceInput { get; }
```

- *Type:* double

---

##### `PurposeJustificationPromptInput`<sup>Optional</sup> <a name="PurposeJustificationPromptInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPromptInput"></a>

```csharp
public string PurposeJustificationPromptInput { get; }
```

- *Type:* string

---

##### `PurposeJustificationRequiredInput`<sup>Optional</sup> <a name="PurposeJustificationRequiredInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequiredInput"></a>

```csharp
public object PurposeJustificationRequiredInput { get; }
```

- *Type:* object

---

##### `RequireInput`<sup>Optional</sup> <a name="RequireInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.requireInput"></a>

```csharp
public object RequireInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApprovalRequired`<sup>Required</sup> <a name="ApprovalRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequired"></a>

```csharp
public object ApprovalRequired { get; }
```

- *Type:* object

---

##### `Decision`<sup>Required</sup> <a name="Decision" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decision"></a>

```csharp
public string Decision { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedence"></a>

```csharp
public double Precedence { get; }
```

- *Type:* double

---

##### `PurposeJustificationPrompt`<sup>Required</sup> <a name="PurposeJustificationPrompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPrompt"></a>

```csharp
public string PurposeJustificationPrompt { get; }
```

- *Type:* string

---

##### `PurposeJustificationRequired`<sup>Required</sup> <a name="PurposeJustificationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequired"></a>

```csharp
public object PurposeJustificationRequired { get; }
```

- *Type:* object

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPolicyApprovalGroup <a name="AccessPolicyApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyApprovalGroup {
    double ApprovalsNeeded,
    string[] EmailAddresses = null,
    string EmailListUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>double</code> | Number of approvals needed. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | List of emails to request approval from. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailListUuid">EmailListUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_list_uuid AccessPolicy#email_list_uuid}. |

---

##### `ApprovalsNeeded`<sup>Required</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.approvalsNeeded"></a>

```csharp
public double ApprovalsNeeded { get; set; }
```

- *Type:* double

Number of approvals needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#approvals_needed AccessPolicy#approvals_needed}

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

List of emails to request approval from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_addresses AccessPolicy#email_addresses}

---

##### `EmailListUuid`<sup>Optional</sup> <a name="EmailListUuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailListUuid"></a>

```csharp
public string EmailListUuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_list_uuid AccessPolicy#email_list_uuid}.

---

### AccessPolicyConfig <a name="AccessPolicyConfig" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    string Decision,
    object Include,
    string Name,
    double Precedence,
    string AccountId = null,
    object ApprovalGroup = null,
    object ApprovalRequired = null,
    object Exclude = null,
    string Id = null,
    string PurposeJustificationPrompt = null,
    object PurposeJustificationRequired = null,
    object Require = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The ID of the application the policy is associated with. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.decision">Decision</a></code> | <code>string</code> | Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.include">Include</a></code> | <code>object</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.name">Name</a></code> | <code>string</code> | Friendly name of the Access Policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.precedence">Precedence</a></code> | <code>double</code> | The unique precedence for policies on a single application. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalGroup">ApprovalGroup</a></code> | <code>object</code> | approval_group block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalRequired">ApprovalRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.exclude">Exclude</a></code> | <code>object</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#id AccessPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationPrompt">PurposeJustificationPrompt</a></code> | <code>string</code> | The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationRequired">PurposeJustificationRequired</a></code> | <code>object</code> | Whether to prompt the user for a justification for accessing the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.require">Require</a></code> | <code>object</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The ID of the application the policy is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#application_id AccessPolicy#application_id}

---

##### `Decision`<sup>Required</sup> <a name="Decision" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.decision"></a>

```csharp
public string Decision { get; set; }
```

- *Type:* string

Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#decision AccessPolicy#decision}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.include"></a>

```csharp
public object Include { get; set; }
```

- *Type:* object

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#include AccessPolicy#include}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Friendly name of the Access Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.precedence"></a>

```csharp
public double Precedence { get; set; }
```

- *Type:* double

The unique precedence for policies on a single application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#precedence AccessPolicy#precedence}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#account_id AccessPolicy#account_id}

---

##### `ApprovalGroup`<sup>Optional</sup> <a name="ApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalGroup"></a>

```csharp
public object ApprovalGroup { get; set; }
```

- *Type:* object

approval_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#approval_group AccessPolicy#approval_group}

---

##### `ApprovalRequired`<sup>Optional</sup> <a name="ApprovalRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalRequired"></a>

```csharp
public object ApprovalRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.exclude"></a>

```csharp
public object Exclude { get; set; }
```

- *Type:* object

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#exclude AccessPolicy#exclude}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#id AccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PurposeJustificationPrompt`<sup>Optional</sup> <a name="PurposeJustificationPrompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationPrompt"></a>

```csharp
public string PurposeJustificationPrompt { get; set; }
```

- *Type:* string

The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#purpose_justification_prompt AccessPolicy#purpose_justification_prompt}

---

##### `PurposeJustificationRequired`<sup>Optional</sup> <a name="PurposeJustificationRequired" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationRequired"></a>

```csharp
public object PurposeJustificationRequired { get; set; }
```

- *Type:* object

Whether to prompt the user for a justification for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#purpose_justification_required AccessPolicy#purpose_justification_required}

---

##### `Require`<sup>Optional</sup> <a name="Require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.require"></a>

```csharp
public object Require { get; set; }
```

- *Type:* object

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#require AccessPolicy#require}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#zone_id AccessPolicy#zone_id}

---

### AccessPolicyExclude <a name="AccessPolicyExclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExclude {
    object AnyValidServiceToken = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    object Everyone = null,
    AccessPolicyExcludeExternalEvaluation ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.authMethod">AuthMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.certificate">Certificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#certificate AccessPolicy#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#common_name AccessPolicy#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.everyone">Everyone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#everyone AccessPolicy#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.geo">Geo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#geo AccessPolicy#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.group">Group</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#group AccessPolicy#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ip">Ip</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip AccessPolicy#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ipList">IpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#login_method AccessPolicy#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#service_token AccessPolicy#service_token}. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}.

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#certificate AccessPolicy#certificate}.

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#common_name AccessPolicy#common_name}.

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}.

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#everyone AccessPolicy#everyone}.

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.externalEvaluation"></a>

```csharp
public AccessPolicyExcludeExternalEvaluation ExternalEvaluation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#geo AccessPolicy#geo}.

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#group AccessPolicy#group}.

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip AccessPolicy#ip}.

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}.

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#login_method AccessPolicy#login_method}.

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#service_token AccessPolicy#service_token}.

---

### AccessPolicyExcludeAzure <a name="AccessPolicyExcludeAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure Identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyExcludeExternalEvaluation <a name="AccessPolicyExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

### AccessPolicyExcludeGithub <a name="AccessPolicyExcludeGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.teams">Teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#teams AccessPolicy#teams}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#teams AccessPolicy#teams}.

---

### AccessPolicyExcludeGsuite <a name="AccessPolicyExcludeGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyExcludeOkta <a name="AccessPolicyExcludeOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.name">Name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}.

---

### AccessPolicyExcludeSaml <a name="AccessPolicyExcludeSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyInclude <a name="AccessPolicyInclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyInclude {
    object AnyValidServiceToken = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    object Everyone = null,
    AccessPolicyIncludeExternalEvaluation ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.authMethod">AuthMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.certificate">Certificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#certificate AccessPolicy#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#common_name AccessPolicy#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.everyone">Everyone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#everyone AccessPolicy#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.geo">Geo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#geo AccessPolicy#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.group">Group</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#group AccessPolicy#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ip">Ip</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip AccessPolicy#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ipList">IpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#login_method AccessPolicy#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#service_token AccessPolicy#service_token}. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}.

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#certificate AccessPolicy#certificate}.

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#common_name AccessPolicy#common_name}.

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}.

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#everyone AccessPolicy#everyone}.

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.externalEvaluation"></a>

```csharp
public AccessPolicyIncludeExternalEvaluation ExternalEvaluation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#geo AccessPolicy#geo}.

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#group AccessPolicy#group}.

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip AccessPolicy#ip}.

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}.

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#login_method AccessPolicy#login_method}.

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#service_token AccessPolicy#service_token}.

---

### AccessPolicyIncludeAzure <a name="AccessPolicyIncludeAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure Identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyIncludeExternalEvaluation <a name="AccessPolicyIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

### AccessPolicyIncludeGithub <a name="AccessPolicyIncludeGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.teams">Teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#teams AccessPolicy#teams}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#teams AccessPolicy#teams}.

---

### AccessPolicyIncludeGsuite <a name="AccessPolicyIncludeGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyIncludeOkta <a name="AccessPolicyIncludeOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.name">Name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}.

---

### AccessPolicyIncludeSaml <a name="AccessPolicyIncludeSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyRequire <a name="AccessPolicyRequire" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequire {
    object AnyValidServiceToken = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    object Everyone = null,
    AccessPolicyRequireExternalEvaluation ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.authMethod">AuthMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.certificate">Certificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#certificate AccessPolicy#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.commonName">CommonName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#common_name AccessPolicy#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.everyone">Everyone</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#everyone AccessPolicy#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.geo">Geo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#geo AccessPolicy#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.group">Group</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#group AccessPolicy#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ip">Ip</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip AccessPolicy#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ipList">IpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#login_method AccessPolicy#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#service_token AccessPolicy#service_token}. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}.

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#certificate AccessPolicy#certificate}.

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#common_name AccessPolicy#common_name}.

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}.

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#everyone AccessPolicy#everyone}.

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.externalEvaluation"></a>

```csharp
public AccessPolicyRequireExternalEvaluation ExternalEvaluation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#geo AccessPolicy#geo}.

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#group AccessPolicy#group}.

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip AccessPolicy#ip}.

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}.

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#login_method AccessPolicy#login_method}.

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#service_token AccessPolicy#service_token}.

---

### AccessPolicyRequireAzure <a name="AccessPolicyRequireAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure Identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyRequireExternalEvaluation <a name="AccessPolicyRequireExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

### AccessPolicyRequireGithub <a name="AccessPolicyRequireGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.teams">Teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#teams AccessPolicy#teams}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#teams AccessPolicy#teams}.

---

### AccessPolicyRequireGsuite <a name="AccessPolicyRequireGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.email">Email</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyRequireOkta <a name="AccessPolicyRequireOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.name">Name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#name AccessPolicy#name}.

---

### AccessPolicyRequireSaml <a name="AccessPolicyRequireSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.3.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPolicyApprovalGroupList <a name="AccessPolicyApprovalGroupList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyApprovalGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get"></a>

```csharp
private AccessPolicyApprovalGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyApprovalGroupOutputReference <a name="AccessPolicyApprovalGroupOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyApprovalGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailListUuid">ResetEmailListUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```

##### `ResetEmailListUuid` <a name="ResetEmailListUuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailListUuid"></a>

```csharp
private void ResetEmailListUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput">ApprovalsNeededInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuidInput">EmailListUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuid">EmailListUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalsNeededInput`<sup>Optional</sup> <a name="ApprovalsNeededInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput"></a>

```csharp
public double ApprovalsNeededInput { get; }
```

- *Type:* double

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailListUuidInput`<sup>Optional</sup> <a name="EmailListUuidInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuidInput"></a>

```csharp
public string EmailListUuidInput { get; }
```

- *Type:* string

---

##### `ApprovalsNeeded`<sup>Required</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeeded"></a>

```csharp
public double ApprovalsNeeded { get; }
```

- *Type:* double

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `EmailListUuid`<sup>Required</sup> <a name="EmailListUuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuid"></a>

```csharp
public string EmailListUuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeAzureList <a name="AccessPolicyExcludeAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get"></a>

```csharp
private AccessPolicyExcludeAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeAzureOutputReference <a name="AccessPolicyExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeExternalEvaluationOutputReference <a name="AccessPolicyExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public AccessPolicyExcludeExternalEvaluation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>

---


### AccessPolicyExcludeGithubList <a name="AccessPolicyExcludeGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get"></a>

```csharp
private AccessPolicyExcludeGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeGithubOutputReference <a name="AccessPolicyExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeGsuiteList <a name="AccessPolicyExcludeGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get"></a>

```csharp
private AccessPolicyExcludeGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeGsuiteOutputReference <a name="AccessPolicyExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeList <a name="AccessPolicyExcludeList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get"></a>

```csharp
private AccessPolicyExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeOktaList <a name="AccessPolicyExcludeOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get"></a>

```csharp
private AccessPolicyExcludeOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeOktaOutputReference <a name="AccessPolicyExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeOutputReference <a name="AccessPolicyExcludeOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(AccessPolicyExcludeExternalEvaluation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList">AccessPolicyExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference">AccessPolicyExcludeExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList">AccessPolicyExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList">AccessPolicyExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList">AccessPolicyExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList">AccessPolicyExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azure"></a>

```csharp
public AccessPolicyExcludeAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList">AccessPolicyExcludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluation"></a>

```csharp
public AccessPolicyExcludeExternalEvaluationOutputReference ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference">AccessPolicyExcludeExternalEvaluationOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.github"></a>

```csharp
public AccessPolicyExcludeGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList">AccessPolicyExcludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuite"></a>

```csharp
public AccessPolicyExcludeGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList">AccessPolicyExcludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.okta"></a>

```csharp
public AccessPolicyExcludeOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList">AccessPolicyExcludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.saml"></a>

```csharp
public AccessPolicyExcludeSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList">AccessPolicyExcludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluationInput"></a>

```csharp
public AccessPolicyExcludeExternalEvaluation ExternalEvaluationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeSamlList <a name="AccessPolicyExcludeSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get"></a>

```csharp
private AccessPolicyExcludeSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyExcludeSamlOutputReference <a name="AccessPolicyExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyExcludeSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeAzureList <a name="AccessPolicyIncludeAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get"></a>

```csharp
private AccessPolicyIncludeAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeAzureOutputReference <a name="AccessPolicyIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeExternalEvaluationOutputReference <a name="AccessPolicyIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public AccessPolicyIncludeExternalEvaluation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>

---


### AccessPolicyIncludeGithubList <a name="AccessPolicyIncludeGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get"></a>

```csharp
private AccessPolicyIncludeGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeGithubOutputReference <a name="AccessPolicyIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeGsuiteList <a name="AccessPolicyIncludeGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get"></a>

```csharp
private AccessPolicyIncludeGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeGsuiteOutputReference <a name="AccessPolicyIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeList <a name="AccessPolicyIncludeList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get"></a>

```csharp
private AccessPolicyIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeOktaList <a name="AccessPolicyIncludeOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get"></a>

```csharp
private AccessPolicyIncludeOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeOktaOutputReference <a name="AccessPolicyIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeOutputReference <a name="AccessPolicyIncludeOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(AccessPolicyIncludeExternalEvaluation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList">AccessPolicyIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference">AccessPolicyIncludeExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList">AccessPolicyIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList">AccessPolicyIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList">AccessPolicyIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList">AccessPolicyIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azure"></a>

```csharp
public AccessPolicyIncludeAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList">AccessPolicyIncludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluation"></a>

```csharp
public AccessPolicyIncludeExternalEvaluationOutputReference ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference">AccessPolicyIncludeExternalEvaluationOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.github"></a>

```csharp
public AccessPolicyIncludeGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList">AccessPolicyIncludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuite"></a>

```csharp
public AccessPolicyIncludeGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList">AccessPolicyIncludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.okta"></a>

```csharp
public AccessPolicyIncludeOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList">AccessPolicyIncludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.saml"></a>

```csharp
public AccessPolicyIncludeSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList">AccessPolicyIncludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluationInput"></a>

```csharp
public AccessPolicyIncludeExternalEvaluation ExternalEvaluationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeSamlList <a name="AccessPolicyIncludeSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get"></a>

```csharp
private AccessPolicyIncludeSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyIncludeSamlOutputReference <a name="AccessPolicyIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyIncludeSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireAzureList <a name="AccessPolicyRequireAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get"></a>

```csharp
private AccessPolicyRequireAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireAzureOutputReference <a name="AccessPolicyRequireAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireExternalEvaluationOutputReference <a name="AccessPolicyRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public AccessPolicyRequireExternalEvaluation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>

---


### AccessPolicyRequireGithubList <a name="AccessPolicyRequireGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get"></a>

```csharp
private AccessPolicyRequireGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireGithubOutputReference <a name="AccessPolicyRequireGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireGsuiteList <a name="AccessPolicyRequireGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get"></a>

```csharp
private AccessPolicyRequireGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireGsuiteOutputReference <a name="AccessPolicyRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireList <a name="AccessPolicyRequireList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get"></a>

```csharp
private AccessPolicyRequireOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireOktaList <a name="AccessPolicyRequireOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get"></a>

```csharp
private AccessPolicyRequireOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireOktaOutputReference <a name="AccessPolicyRequireOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireOutputReference <a name="AccessPolicyRequireOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(AccessPolicyRequireExternalEvaluation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList">AccessPolicyRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference">AccessPolicyRequireExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList">AccessPolicyRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList">AccessPolicyRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList">AccessPolicyRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList">AccessPolicyRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azure"></a>

```csharp
public AccessPolicyRequireAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList">AccessPolicyRequireAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluation"></a>

```csharp
public AccessPolicyRequireExternalEvaluationOutputReference ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference">AccessPolicyRequireExternalEvaluationOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.github"></a>

```csharp
public AccessPolicyRequireGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList">AccessPolicyRequireGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuite"></a>

```csharp
public AccessPolicyRequireGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList">AccessPolicyRequireGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.okta"></a>

```csharp
public AccessPolicyRequireOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList">AccessPolicyRequireOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.saml"></a>

```csharp
public AccessPolicyRequireSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList">AccessPolicyRequireSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluationInput"></a>

```csharp
public AccessPolicyRequireExternalEvaluation ExternalEvaluationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireSamlList <a name="AccessPolicyRequireSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get"></a>

```csharp
private AccessPolicyRequireSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessPolicyRequireSamlOutputReference <a name="AccessPolicyRequireSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new AccessPolicyRequireSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



