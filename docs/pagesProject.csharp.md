# `cloudflare_pages_project`

Refer to the Terraform Registory for docs: [`cloudflare_pages_project`](https://www.terraform.io/docs/providers/cloudflare/r/pages_project).

# `pagesProject` Submodule <a name="`pagesProject` Submodule" id="@cdktf/provider-cloudflare.pagesProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PagesProject <a name="PagesProject" id="@cdktf/provider-cloudflare.pagesProject.PagesProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project cloudflare_pages_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProject(Construct Scope, string Id, PagesProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig">PagesProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig">PagesProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig">PutBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs">PutDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig">ResetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs">ResetDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBuildConfig` <a name="PutBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig"></a>

```csharp
private void PutBuildConfig(PagesProjectBuildConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `PutDeploymentConfigs` <a name="PutDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs"></a>

```csharp
private void PutDeploymentConfigs(PagesProjectDeploymentConfigs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putDeploymentConfigs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource"></a>

```csharp
private void PutSource(PagesProjectSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `ResetBuildConfig` <a name="ResetBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetBuildConfig"></a>

```csharp
private void ResetBuildConfig()
```

##### `ResetDeploymentConfigs` <a name="ResetDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetDeploymentConfigs"></a>

```csharp
private void ResetDeploymentConfigs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

PagesProject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

PagesProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

PagesProject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs">DeploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain">Subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput">BuildConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput">DeploymentConfigsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput">ProductionBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch">ProductionBranch</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfig"></a>

```csharp
public PagesProjectBuildConfigOutputReference BuildConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference">PagesProjectBuildConfigOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DeploymentConfigs`<sup>Required</sup> <a name="DeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigs"></a>

```csharp
public PagesProjectDeploymentConfigsOutputReference DeploymentConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference">PagesProjectDeploymentConfigsOutputReference</a>

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.source"></a>

```csharp
public PagesProjectSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference">PagesProjectSourceOutputReference</a>

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.subdomain"></a>

```csharp
public string Subdomain { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BuildConfigInput`<sup>Optional</sup> <a name="BuildConfigInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.buildConfigInput"></a>

```csharp
public PagesProjectBuildConfig BuildConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---

##### `DeploymentConfigsInput`<sup>Optional</sup> <a name="DeploymentConfigsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.deploymentConfigsInput"></a>

```csharp
public PagesProjectDeploymentConfigs DeploymentConfigsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductionBranchInput`<sup>Optional</sup> <a name="ProductionBranchInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranchInput"></a>

```csharp
public string ProductionBranchInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.sourceInput"></a>

```csharp
public PagesProjectSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.productionBranch"></a>

```csharp
public string ProductionBranch { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.pagesProject.PagesProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PagesProjectBuildConfig <a name="PagesProjectBuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectBuildConfig {
    string BuildCommand = null,
    string DestinationDir = null,
    string RootDir = null,
    string WebAnalyticsTag = null,
    string WebAnalyticsToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand">BuildCommand</a></code> | <code>string</code> | Command used to build project. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir">DestinationDir</a></code> | <code>string</code> | Output directory of the build. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir">RootDir</a></code> | <code>string</code> | Directory to run the command. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag">WebAnalyticsTag</a></code> | <code>string</code> | The classifying tag for analytics. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken">WebAnalyticsToken</a></code> | <code>string</code> | The auth token for analytics. |

---

##### `BuildCommand`<sup>Optional</sup> <a name="BuildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.buildCommand"></a>

```csharp
public string BuildCommand { get; set; }
```

- *Type:* string

Command used to build project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#build_command PagesProject#build_command}

---

##### `DestinationDir`<sup>Optional</sup> <a name="DestinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.destinationDir"></a>

```csharp
public string DestinationDir { get; set; }
```

- *Type:* string

Output directory of the build.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#destination_dir PagesProject#destination_dir}

---

##### `RootDir`<sup>Optional</sup> <a name="RootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.rootDir"></a>

```csharp
public string RootDir { get; set; }
```

- *Type:* string

Directory to run the command.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#root_dir PagesProject#root_dir}

---

##### `WebAnalyticsTag`<sup>Optional</sup> <a name="WebAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsTag"></a>

```csharp
public string WebAnalyticsTag { get; set; }
```

- *Type:* string

The classifying tag for analytics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#web_analytics_tag PagesProject#web_analytics_tag}

---

##### `WebAnalyticsToken`<sup>Optional</sup> <a name="WebAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig.property.webAnalyticsToken"></a>

```csharp
public string WebAnalyticsToken { get; set; }
```

- *Type:* string

The auth token for analytics.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#web_analytics_token PagesProject#web_analytics_token}

---

### PagesProjectConfig <a name="PagesProjectConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    string ProductionBranch,
    PagesProjectBuildConfig BuildConfig = null,
    PagesProjectDeploymentConfigs DeploymentConfigs = null,
    string Id = null,
    PagesProjectSource Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name">Name</a></code> | <code>string</code> | Name of the project. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch">ProductionBranch</a></code> | <code>string</code> | The name of the branch that is used for the production environment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs">DeploymentConfigs</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | deployment_configs block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#id PagesProject#id}. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | source block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#account_id PagesProject#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the project. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#name PagesProject#name}

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.productionBranch"></a>

```csharp
public string ProductionBranch { get; set; }
```

- *Type:* string

The name of the branch that is used for the production environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#production_branch PagesProject#production_branch}

---

##### `BuildConfig`<sup>Optional</sup> <a name="BuildConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.buildConfig"></a>

```csharp
public PagesProjectBuildConfig BuildConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#build_config PagesProject#build_config}

---

##### `DeploymentConfigs`<sup>Optional</sup> <a name="DeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.deploymentConfigs"></a>

```csharp
public PagesProjectDeploymentConfigs DeploymentConfigs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

deployment_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#deployment_configs PagesProject#deployment_configs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#id PagesProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectConfig.property.source"></a>

```csharp
public PagesProjectSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#source PagesProject#source}

---

### PagesProjectDeploymentConfigs <a name="PagesProjectDeploymentConfigs" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigs {
    PagesProjectDeploymentConfigsPreview Preview,
    PagesProjectDeploymentConfigsProduction Production
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview">Preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production">Production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | production block. |

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.preview"></a>

```csharp
public PagesProjectDeploymentConfigsPreview Preview { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

preview block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#preview PagesProject#preview}

---

##### `Production`<sup>Required</sup> <a name="Production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs.property.production"></a>

```csharp
public PagesProjectDeploymentConfigsProduction Production { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

production block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#production PagesProject#production}

---

### PagesProjectDeploymentConfigsPreview <a name="PagesProjectDeploymentConfigsPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsPreview {
    object AlwaysUseLatestCompatibilityDate = null,
    string CompatibilityDate = null,
    string[] CompatibilityFlags = null,
    System.Collections.Generic.IDictionary<string, string> D1Databases = null,
    System.Collections.Generic.IDictionary<string, string> DurableObjectNamespaces = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    object FailOpen = null,
    System.Collections.Generic.IDictionary<string, string> KvNamespaces = null,
    System.Collections.Generic.IDictionary<string, string> R2Buckets = null,
    object ServiceBinding = null,
    string UsageModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate">AlwaysUseLatestCompatibilityDate</a></code> | <code>object</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases">D1Databases</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | D1 Databases used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces">DurableObjectNamespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Durable Object namespaces used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen">FailOpen</a></code> | <code>object</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces">KvNamespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | KV namespaces used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets">R2Buckets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | R2 Buckets used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding">ServiceBinding</a></code> | <code>object</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel">UsageModel</a></code> | <code>string</code> | Usage model used for Pages Functions. Defaults to `bundled`. |

---

##### `AlwaysUseLatestCompatibilityDate`<sup>Optional</sup> <a name="AlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.alwaysUseLatestCompatibilityDate"></a>

```csharp
public object AlwaysUseLatestCompatibilityDate { get; set; }
```

- *Type:* object

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; set; }
```

- *Type:* string

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; set; }
```

- *Type:* string[]

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `D1Databases`<sup>Optional</sup> <a name="D1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.d1Databases"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> D1Databases { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

D1 Databases used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#d1_databases PagesProject#d1_databases}

---

##### `DurableObjectNamespaces`<sup>Optional</sup> <a name="DurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.durableObjectNamespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DurableObjectNamespaces { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Durable Object namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#environment_variables PagesProject#environment_variables}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.failOpen"></a>

```csharp
public object FailOpen { get; set; }
```

- *Type:* object

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#fail_open PagesProject#fail_open}

---

##### `KvNamespaces`<sup>Optional</sup> <a name="KvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.kvNamespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KvNamespaces { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

KV namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `R2Buckets`<sup>Optional</sup> <a name="R2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.r2Buckets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> R2Buckets { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

R2 Buckets used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `ServiceBinding`<sup>Optional</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.serviceBinding"></a>

```csharp
public object ServiceBinding { get; set; }
```

- *Type:* object

service_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#service_binding PagesProject#service_binding}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview.property.usageModel"></a>

```csharp
public string UsageModel { get; set; }
```

- *Type:* string

Usage model used for Pages Functions. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsPreviewServiceBinding <a name="PagesProjectDeploymentConfigsPreviewServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsPreviewServiceBinding {
    string Name,
    string Service,
    string Environment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name">Name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service">Service</a></code> | <code>string</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment">Environment</a></code> | <code>string</code> | The name of the Worker environment to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#name PagesProject#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#service PagesProject#service}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBinding.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#environment PagesProject#environment}

---

### PagesProjectDeploymentConfigsProduction <a name="PagesProjectDeploymentConfigsProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsProduction {
    object AlwaysUseLatestCompatibilityDate = null,
    string CompatibilityDate = null,
    string[] CompatibilityFlags = null,
    System.Collections.Generic.IDictionary<string, string> D1Databases = null,
    System.Collections.Generic.IDictionary<string, string> DurableObjectNamespaces = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    object FailOpen = null,
    System.Collections.Generic.IDictionary<string, string> KvNamespaces = null,
    System.Collections.Generic.IDictionary<string, string> R2Buckets = null,
    object ServiceBinding = null,
    string UsageModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate">AlwaysUseLatestCompatibilityDate</a></code> | <code>object</code> | Use latest compatibility date for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | Compatibility date used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | Compatibility flags used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases">D1Databases</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | D1 Databases used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces">DurableObjectNamespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Durable Object namespaces used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen">FailOpen</a></code> | <code>object</code> | Fail open used for Pages Functions. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces">KvNamespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | KV namespaces used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets">R2Buckets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | R2 Buckets used for Pages Functions. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding">ServiceBinding</a></code> | <code>object</code> | service_binding block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel">UsageModel</a></code> | <code>string</code> | Usage model used for Pages Functions. Defaults to `bundled`. |

---

##### `AlwaysUseLatestCompatibilityDate`<sup>Optional</sup> <a name="AlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.alwaysUseLatestCompatibilityDate"></a>

```csharp
public object AlwaysUseLatestCompatibilityDate { get; set; }
```

- *Type:* object

Use latest compatibility date for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#always_use_latest_compatibility_date PagesProject#always_use_latest_compatibility_date}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; set; }
```

- *Type:* string

Compatibility date used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#compatibility_date PagesProject#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; set; }
```

- *Type:* string[]

Compatibility flags used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#compatibility_flags PagesProject#compatibility_flags}

---

##### `D1Databases`<sup>Optional</sup> <a name="D1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.d1Databases"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> D1Databases { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

D1 Databases used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#d1_databases PagesProject#d1_databases}

---

##### `DurableObjectNamespaces`<sup>Optional</sup> <a name="DurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.durableObjectNamespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DurableObjectNamespaces { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Durable Object namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#durable_object_namespaces PagesProject#durable_object_namespaces}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#environment_variables PagesProject#environment_variables}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.failOpen"></a>

```csharp
public object FailOpen { get; set; }
```

- *Type:* object

Fail open used for Pages Functions. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#fail_open PagesProject#fail_open}

---

##### `KvNamespaces`<sup>Optional</sup> <a name="KvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.kvNamespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KvNamespaces { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

KV namespaces used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#kv_namespaces PagesProject#kv_namespaces}

---

##### `R2Buckets`<sup>Optional</sup> <a name="R2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.r2Buckets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> R2Buckets { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

R2 Buckets used for Pages Functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#r2_buckets PagesProject#r2_buckets}

---

##### `ServiceBinding`<sup>Optional</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.serviceBinding"></a>

```csharp
public object ServiceBinding { get; set; }
```

- *Type:* object

service_binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#service_binding PagesProject#service_binding}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction.property.usageModel"></a>

```csharp
public string UsageModel { get; set; }
```

- *Type:* string

Usage model used for Pages Functions. Defaults to `bundled`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#usage_model PagesProject#usage_model}

---

### PagesProjectDeploymentConfigsProductionServiceBinding <a name="PagesProjectDeploymentConfigsProductionServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsProductionServiceBinding {
    string Name,
    string Service,
    string Environment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name">Name</a></code> | <code>string</code> | The global variable for the binding in your Worker code. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service">Service</a></code> | <code>string</code> | The name of the Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment">Environment</a></code> | <code>string</code> | The name of the Worker environment to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The global variable for the binding in your Worker code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#name PagesProject#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the Worker to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#service PagesProject#service}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBinding.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The name of the Worker environment to bind to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#environment PagesProject#environment}

---

### PagesProjectSource <a name="PagesProjectSource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectSource {
    PagesProjectSourceConfig Config = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type">Type</a></code> | <code>string</code> | Project host type. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.config"></a>

```csharp
public PagesProjectSourceConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#config PagesProject#config}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Project host type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#type PagesProject#type}

---

### PagesProjectSourceConfig <a name="PagesProjectSourceConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectSourceConfig {
    string ProductionBranch,
    object DeploymentsEnabled = null,
    string Owner = null,
    object PrCommentsEnabled = null,
    string[] PreviewBranchExcludes = null,
    string[] PreviewBranchIncludes = null,
    string PreviewDeploymentSetting = null,
    object ProductionDeploymentEnabled = null,
    string RepoName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch">ProductionBranch</a></code> | <code>string</code> | Project production branch name. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled">DeploymentsEnabled</a></code> | <code>object</code> | Toggle deployments on this repo. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner">Owner</a></code> | <code>string</code> | Project owner username. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled">PrCommentsEnabled</a></code> | <code>object</code> | Enable Pages to comment on Pull Requests. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes">PreviewBranchExcludes</a></code> | <code>string[]</code> | Branches will be excluded from automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes">PreviewBranchIncludes</a></code> | <code>string[]</code> | Branches will be included for automatic deployment. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting">PreviewDeploymentSetting</a></code> | <code>string</code> | Preview Deployment Setting. Defaults to `all`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled">ProductionDeploymentEnabled</a></code> | <code>object</code> | Enable production deployments. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName">RepoName</a></code> | <code>string</code> | Project repository name. |

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionBranch"></a>

```csharp
public string ProductionBranch { get; set; }
```

- *Type:* string

Project production branch name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#production_branch PagesProject#production_branch}

---

##### `DeploymentsEnabled`<sup>Optional</sup> <a name="DeploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.deploymentsEnabled"></a>

```csharp
public object DeploymentsEnabled { get; set; }
```

- *Type:* object

Toggle deployments on this repo. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#deployments_enabled PagesProject#deployments_enabled}

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Project owner username.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#owner PagesProject#owner}

---

##### `PrCommentsEnabled`<sup>Optional</sup> <a name="PrCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.prCommentsEnabled"></a>

```csharp
public object PrCommentsEnabled { get; set; }
```

- *Type:* object

Enable Pages to comment on Pull Requests. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#pr_comments_enabled PagesProject#pr_comments_enabled}

---

##### `PreviewBranchExcludes`<sup>Optional</sup> <a name="PreviewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchExcludes"></a>

```csharp
public string[] PreviewBranchExcludes { get; set; }
```

- *Type:* string[]

Branches will be excluded from automatic deployment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#preview_branch_excludes PagesProject#preview_branch_excludes}

---

##### `PreviewBranchIncludes`<sup>Optional</sup> <a name="PreviewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewBranchIncludes"></a>

```csharp
public string[] PreviewBranchIncludes { get; set; }
```

- *Type:* string[]

Branches will be included for automatic deployment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#preview_branch_includes PagesProject#preview_branch_includes}

---

##### `PreviewDeploymentSetting`<sup>Optional</sup> <a name="PreviewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.previewDeploymentSetting"></a>

```csharp
public string PreviewDeploymentSetting { get; set; }
```

- *Type:* string

Preview Deployment Setting. Defaults to `all`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#preview_deployment_setting PagesProject#preview_deployment_setting}

---

##### `ProductionDeploymentEnabled`<sup>Optional</sup> <a name="ProductionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.productionDeploymentEnabled"></a>

```csharp
public object ProductionDeploymentEnabled { get; set; }
```

- *Type:* object

Enable production deployments. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#production_deployment_enabled PagesProject#production_deployment_enabled}

---

##### `RepoName`<sup>Optional</sup> <a name="RepoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig.property.repoName"></a>

```csharp
public string RepoName { get; set; }
```

- *Type:* string

Project repository name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/pages_project#repo_name PagesProject#repo_name}

---

## Classes <a name="Classes" id="Classes"></a>

### PagesProjectBuildConfigOutputReference <a name="PagesProjectBuildConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectBuildConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand">ResetBuildCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir">ResetDestinationDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir">ResetRootDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag">ResetWebAnalyticsTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken">ResetWebAnalyticsToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildCommand` <a name="ResetBuildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetBuildCommand"></a>

```csharp
private void ResetBuildCommand()
```

##### `ResetDestinationDir` <a name="ResetDestinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetDestinationDir"></a>

```csharp
private void ResetDestinationDir()
```

##### `ResetRootDir` <a name="ResetRootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetRootDir"></a>

```csharp
private void ResetRootDir()
```

##### `ResetWebAnalyticsTag` <a name="ResetWebAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsTag"></a>

```csharp
private void ResetWebAnalyticsTag()
```

##### `ResetWebAnalyticsToken` <a name="ResetWebAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.resetWebAnalyticsToken"></a>

```csharp
private void ResetWebAnalyticsToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput">BuildCommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput">DestinationDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput">RootDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput">WebAnalyticsTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput">WebAnalyticsTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand">BuildCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir">DestinationDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir">RootDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag">WebAnalyticsTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken">WebAnalyticsToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildCommandInput`<sup>Optional</sup> <a name="BuildCommandInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommandInput"></a>

```csharp
public string BuildCommandInput { get; }
```

- *Type:* string

---

##### `DestinationDirInput`<sup>Optional</sup> <a name="DestinationDirInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDirInput"></a>

```csharp
public string DestinationDirInput { get; }
```

- *Type:* string

---

##### `RootDirInput`<sup>Optional</sup> <a name="RootDirInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDirInput"></a>

```csharp
public string RootDirInput { get; }
```

- *Type:* string

---

##### `WebAnalyticsTagInput`<sup>Optional</sup> <a name="WebAnalyticsTagInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTagInput"></a>

```csharp
public string WebAnalyticsTagInput { get; }
```

- *Type:* string

---

##### `WebAnalyticsTokenInput`<sup>Optional</sup> <a name="WebAnalyticsTokenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTokenInput"></a>

```csharp
public string WebAnalyticsTokenInput { get; }
```

- *Type:* string

---

##### `BuildCommand`<sup>Required</sup> <a name="BuildCommand" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.buildCommand"></a>

```csharp
public string BuildCommand { get; }
```

- *Type:* string

---

##### `DestinationDir`<sup>Required</sup> <a name="DestinationDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.destinationDir"></a>

```csharp
public string DestinationDir { get; }
```

- *Type:* string

---

##### `RootDir`<sup>Required</sup> <a name="RootDir" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.rootDir"></a>

```csharp
public string RootDir { get; }
```

- *Type:* string

---

##### `WebAnalyticsTag`<sup>Required</sup> <a name="WebAnalyticsTag" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsTag"></a>

```csharp
public string WebAnalyticsTag { get; }
```

- *Type:* string

---

##### `WebAnalyticsToken`<sup>Required</sup> <a name="WebAnalyticsToken" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.webAnalyticsToken"></a>

```csharp
public string WebAnalyticsToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfigOutputReference.property.internalValue"></a>

```csharp
public PagesProjectBuildConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectBuildConfig">PagesProjectBuildConfig</a>

---


### PagesProjectDeploymentConfigsOutputReference <a name="PagesProjectDeploymentConfigsOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview">PutPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction">PutProduction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreview` <a name="PutPreview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview"></a>

```csharp
private void PutPreview(PagesProjectDeploymentConfigsPreview Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putPreview.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `PutProduction` <a name="PutProduction" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction"></a>

```csharp
private void PutProduction(PagesProjectDeploymentConfigsProduction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.putProduction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview">Preview</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production">Production</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput">PreviewInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput">ProductionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.preview"></a>

```csharp
public PagesProjectDeploymentConfigsPreviewOutputReference Preview { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference">PagesProjectDeploymentConfigsPreviewOutputReference</a>

---

##### `Production`<sup>Required</sup> <a name="Production" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.production"></a>

```csharp
public PagesProjectDeploymentConfigsProductionOutputReference Production { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference">PagesProjectDeploymentConfigsProductionOutputReference</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.previewInput"></a>

```csharp
public PagesProjectDeploymentConfigsPreview PreviewInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---

##### `ProductionInput`<sup>Optional</sup> <a name="ProductionInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.productionInput"></a>

```csharp
public PagesProjectDeploymentConfigsProduction ProductionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsOutputReference.property.internalValue"></a>

```csharp
public PagesProjectDeploymentConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigs">PagesProjectDeploymentConfigs</a>

---


### PagesProjectDeploymentConfigsPreviewOutputReference <a name="PagesProjectDeploymentConfigsPreviewOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsPreviewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding">PutServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate">ResetAlwaysUseLatestCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases">ResetD1Databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces">ResetDurableObjectNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces">ResetKvNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets">ResetR2Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding">ResetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceBinding` <a name="PutServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding"></a>

```csharp
private void PutServiceBinding(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* object

---

##### `ResetAlwaysUseLatestCompatibilityDate` <a name="ResetAlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```csharp
private void ResetAlwaysUseLatestCompatibilityDate()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityDate"></a>

```csharp
private void ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetCompatibilityFlags"></a>

```csharp
private void ResetCompatibilityFlags()
```

##### `ResetD1Databases` <a name="ResetD1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetD1Databases"></a>

```csharp
private void ResetD1Databases()
```

##### `ResetDurableObjectNamespaces` <a name="ResetDurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetDurableObjectNamespaces"></a>

```csharp
private void ResetDurableObjectNamespaces()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetKvNamespaces` <a name="ResetKvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetKvNamespaces"></a>

```csharp
private void ResetKvNamespaces()
```

##### `ResetR2Buckets` <a name="ResetR2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetR2Buckets"></a>

```csharp
private void ResetR2Buckets()
```

##### `ResetServiceBinding` <a name="ResetServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetServiceBinding"></a>

```csharp
private void ResetServiceBinding()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.resetUsageModel"></a>

```csharp
private void ResetUsageModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding">ServiceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput">AlwaysUseLatestCompatibilityDateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput">D1DatabasesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput">DurableObjectNamespacesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput">KvNamespacesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput">R2BucketsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput">ServiceBindingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput">UsageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate">AlwaysUseLatestCompatibilityDate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases">D1Databases</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces">DurableObjectNamespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen">FailOpen</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces">KvNamespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets">R2Buckets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel">UsageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceBinding`<sup>Required</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBinding"></a>

```csharp
public PagesProjectDeploymentConfigsPreviewServiceBindingList ServiceBinding { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList">PagesProjectDeploymentConfigsPreviewServiceBindingList</a>

---

##### `AlwaysUseLatestCompatibilityDateInput`<sup>Optional</sup> <a name="AlwaysUseLatestCompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```csharp
public object AlwaysUseLatestCompatibilityDateInput { get; }
```

- *Type:* object

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDateInput"></a>

```csharp
public string CompatibilityDateInput { get; }
```

- *Type:* string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlagsInput"></a>

```csharp
public string[] CompatibilityFlagsInput { get; }
```

- *Type:* string[]

---

##### `D1DatabasesInput`<sup>Optional</sup> <a name="D1DatabasesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1DatabasesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> D1DatabasesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DurableObjectNamespacesInput`<sup>Optional</sup> <a name="DurableObjectNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespacesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DurableObjectNamespacesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpenInput"></a>

```csharp
public object FailOpenInput { get; }
```

- *Type:* object

---

##### `KvNamespacesInput`<sup>Optional</sup> <a name="KvNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespacesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KvNamespacesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `R2BucketsInput`<sup>Optional</sup> <a name="R2BucketsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2BucketsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> R2BucketsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServiceBindingInput`<sup>Optional</sup> <a name="ServiceBindingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.serviceBindingInput"></a>

```csharp
public object ServiceBindingInput { get; }
```

- *Type:* object

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModelInput"></a>

```csharp
public string UsageModelInput { get; }
```

- *Type:* string

---

##### `AlwaysUseLatestCompatibilityDate`<sup>Required</sup> <a name="AlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```csharp
public object AlwaysUseLatestCompatibilityDate { get; }
```

- *Type:* object

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; }
```

- *Type:* string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; }
```

- *Type:* string[]

---

##### `D1Databases`<sup>Required</sup> <a name="D1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.d1Databases"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> D1Databases { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DurableObjectNamespaces`<sup>Required</sup> <a name="DurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.durableObjectNamespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DurableObjectNamespaces { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.failOpen"></a>

```csharp
public object FailOpen { get; }
```

- *Type:* object

---

##### `KvNamespaces`<sup>Required</sup> <a name="KvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.kvNamespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KvNamespaces { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `R2Buckets`<sup>Required</sup> <a name="R2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.r2Buckets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> R2Buckets { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.usageModel"></a>

```csharp
public string UsageModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewOutputReference.property.internalValue"></a>

```csharp
public PagesProjectDeploymentConfigsPreview InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreview">PagesProjectDeploymentConfigsPreview</a>

---


### PagesProjectDeploymentConfigsPreviewServiceBindingList <a name="PagesProjectDeploymentConfigsPreviewServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsPreviewServiceBindingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get"></a>

```csharp
private PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsPreviewServiceBindingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PagesProjectDeploymentConfigsProductionOutputReference <a name="PagesProjectDeploymentConfigsProductionOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsProductionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding">PutServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate">ResetAlwaysUseLatestCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases">ResetD1Databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces">ResetDurableObjectNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces">ResetKvNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets">ResetR2Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding">ResetServiceBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceBinding` <a name="PutServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding"></a>

```csharp
private void PutServiceBinding(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.putServiceBinding.parameter.value"></a>

- *Type:* object

---

##### `ResetAlwaysUseLatestCompatibilityDate` <a name="ResetAlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetAlwaysUseLatestCompatibilityDate"></a>

```csharp
private void ResetAlwaysUseLatestCompatibilityDate()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityDate"></a>

```csharp
private void ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetCompatibilityFlags"></a>

```csharp
private void ResetCompatibilityFlags()
```

##### `ResetD1Databases` <a name="ResetD1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetD1Databases"></a>

```csharp
private void ResetD1Databases()
```

##### `ResetDurableObjectNamespaces` <a name="ResetDurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetDurableObjectNamespaces"></a>

```csharp
private void ResetDurableObjectNamespaces()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetFailOpen"></a>

```csharp
private void ResetFailOpen()
```

##### `ResetKvNamespaces` <a name="ResetKvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetKvNamespaces"></a>

```csharp
private void ResetKvNamespaces()
```

##### `ResetR2Buckets` <a name="ResetR2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetR2Buckets"></a>

```csharp
private void ResetR2Buckets()
```

##### `ResetServiceBinding` <a name="ResetServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetServiceBinding"></a>

```csharp
private void ResetServiceBinding()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.resetUsageModel"></a>

```csharp
private void ResetUsageModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding">ServiceBinding</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput">AlwaysUseLatestCompatibilityDateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput">D1DatabasesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput">DurableObjectNamespacesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput">KvNamespacesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput">R2BucketsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput">ServiceBindingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput">UsageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate">AlwaysUseLatestCompatibilityDate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases">D1Databases</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces">DurableObjectNamespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen">FailOpen</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces">KvNamespaces</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets">R2Buckets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel">UsageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceBinding`<sup>Required</sup> <a name="ServiceBinding" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBinding"></a>

```csharp
public PagesProjectDeploymentConfigsProductionServiceBindingList ServiceBinding { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList">PagesProjectDeploymentConfigsProductionServiceBindingList</a>

---

##### `AlwaysUseLatestCompatibilityDateInput`<sup>Optional</sup> <a name="AlwaysUseLatestCompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDateInput"></a>

```csharp
public object AlwaysUseLatestCompatibilityDateInput { get; }
```

- *Type:* object

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDateInput"></a>

```csharp
public string CompatibilityDateInput { get; }
```

- *Type:* string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlagsInput"></a>

```csharp
public string[] CompatibilityFlagsInput { get; }
```

- *Type:* string[]

---

##### `D1DatabasesInput`<sup>Optional</sup> <a name="D1DatabasesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1DatabasesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> D1DatabasesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DurableObjectNamespacesInput`<sup>Optional</sup> <a name="DurableObjectNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespacesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DurableObjectNamespacesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpenInput"></a>

```csharp
public object FailOpenInput { get; }
```

- *Type:* object

---

##### `KvNamespacesInput`<sup>Optional</sup> <a name="KvNamespacesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespacesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KvNamespacesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `R2BucketsInput`<sup>Optional</sup> <a name="R2BucketsInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2BucketsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> R2BucketsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServiceBindingInput`<sup>Optional</sup> <a name="ServiceBindingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.serviceBindingInput"></a>

```csharp
public object ServiceBindingInput { get; }
```

- *Type:* object

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModelInput"></a>

```csharp
public string UsageModelInput { get; }
```

- *Type:* string

---

##### `AlwaysUseLatestCompatibilityDate`<sup>Required</sup> <a name="AlwaysUseLatestCompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.alwaysUseLatestCompatibilityDate"></a>

```csharp
public object AlwaysUseLatestCompatibilityDate { get; }
```

- *Type:* object

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; }
```

- *Type:* string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; }
```

- *Type:* string[]

---

##### `D1Databases`<sup>Required</sup> <a name="D1Databases" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.d1Databases"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> D1Databases { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DurableObjectNamespaces`<sup>Required</sup> <a name="DurableObjectNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.durableObjectNamespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DurableObjectNamespaces { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.failOpen"></a>

```csharp
public object FailOpen { get; }
```

- *Type:* object

---

##### `KvNamespaces`<sup>Required</sup> <a name="KvNamespaces" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.kvNamespaces"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KvNamespaces { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `R2Buckets`<sup>Required</sup> <a name="R2Buckets" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.r2Buckets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> R2Buckets { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.usageModel"></a>

```csharp
public string UsageModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionOutputReference.property.internalValue"></a>

```csharp
public PagesProjectDeploymentConfigsProduction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProduction">PagesProjectDeploymentConfigsProduction</a>

---


### PagesProjectDeploymentConfigsProductionServiceBindingList <a name="PagesProjectDeploymentConfigsProductionServiceBindingList" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsProductionServiceBindingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get"></a>

```csharp
private PagesProjectDeploymentConfigsProductionServiceBindingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PagesProjectDeploymentConfigsProductionServiceBindingOutputReference <a name="PagesProjectDeploymentConfigsProductionServiceBindingOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectDeploymentConfigsProductionServiceBindingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectDeploymentConfigsProductionServiceBindingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PagesProjectSourceConfigOutputReference <a name="PagesProjectSourceConfigOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled">ResetDeploymentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled">ResetPrCommentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes">ResetPreviewBranchExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes">ResetPreviewBranchIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting">ResetPreviewDeploymentSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled">ResetProductionDeploymentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName">ResetRepoName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentsEnabled` <a name="ResetDeploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetDeploymentsEnabled"></a>

```csharp
private void ResetDeploymentsEnabled()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetPrCommentsEnabled` <a name="ResetPrCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPrCommentsEnabled"></a>

```csharp
private void ResetPrCommentsEnabled()
```

##### `ResetPreviewBranchExcludes` <a name="ResetPreviewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchExcludes"></a>

```csharp
private void ResetPreviewBranchExcludes()
```

##### `ResetPreviewBranchIncludes` <a name="ResetPreviewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewBranchIncludes"></a>

```csharp
private void ResetPreviewBranchIncludes()
```

##### `ResetPreviewDeploymentSetting` <a name="ResetPreviewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetPreviewDeploymentSetting"></a>

```csharp
private void ResetPreviewDeploymentSetting()
```

##### `ResetProductionDeploymentEnabled` <a name="ResetProductionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetProductionDeploymentEnabled"></a>

```csharp
private void ResetProductionDeploymentEnabled()
```

##### `ResetRepoName` <a name="ResetRepoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.resetRepoName"></a>

```csharp
private void ResetRepoName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput">DeploymentsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput">PrCommentsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput">PreviewBranchExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput">PreviewBranchIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput">PreviewDeploymentSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput">ProductionBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput">ProductionDeploymentEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled">DeploymentsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled">PrCommentsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes">PreviewBranchExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes">PreviewBranchIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting">PreviewDeploymentSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch">ProductionBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled">ProductionDeploymentEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName">RepoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentsEnabledInput`<sup>Optional</sup> <a name="DeploymentsEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabledInput"></a>

```csharp
public object DeploymentsEnabledInput { get; }
```

- *Type:* object

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PrCommentsEnabledInput`<sup>Optional</sup> <a name="PrCommentsEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabledInput"></a>

```csharp
public object PrCommentsEnabledInput { get; }
```

- *Type:* object

---

##### `PreviewBranchExcludesInput`<sup>Optional</sup> <a name="PreviewBranchExcludesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludesInput"></a>

```csharp
public string[] PreviewBranchExcludesInput { get; }
```

- *Type:* string[]

---

##### `PreviewBranchIncludesInput`<sup>Optional</sup> <a name="PreviewBranchIncludesInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludesInput"></a>

```csharp
public string[] PreviewBranchIncludesInput { get; }
```

- *Type:* string[]

---

##### `PreviewDeploymentSettingInput`<sup>Optional</sup> <a name="PreviewDeploymentSettingInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSettingInput"></a>

```csharp
public string PreviewDeploymentSettingInput { get; }
```

- *Type:* string

---

##### `ProductionBranchInput`<sup>Optional</sup> <a name="ProductionBranchInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranchInput"></a>

```csharp
public string ProductionBranchInput { get; }
```

- *Type:* string

---

##### `ProductionDeploymentEnabledInput`<sup>Optional</sup> <a name="ProductionDeploymentEnabledInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabledInput"></a>

```csharp
public object ProductionDeploymentEnabledInput { get; }
```

- *Type:* object

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoNameInput"></a>

```csharp
public string RepoNameInput { get; }
```

- *Type:* string

---

##### `DeploymentsEnabled`<sup>Required</sup> <a name="DeploymentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.deploymentsEnabled"></a>

```csharp
public object DeploymentsEnabled { get; }
```

- *Type:* object

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PrCommentsEnabled`<sup>Required</sup> <a name="PrCommentsEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.prCommentsEnabled"></a>

```csharp
public object PrCommentsEnabled { get; }
```

- *Type:* object

---

##### `PreviewBranchExcludes`<sup>Required</sup> <a name="PreviewBranchExcludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchExcludes"></a>

```csharp
public string[] PreviewBranchExcludes { get; }
```

- *Type:* string[]

---

##### `PreviewBranchIncludes`<sup>Required</sup> <a name="PreviewBranchIncludes" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewBranchIncludes"></a>

```csharp
public string[] PreviewBranchIncludes { get; }
```

- *Type:* string[]

---

##### `PreviewDeploymentSetting`<sup>Required</sup> <a name="PreviewDeploymentSetting" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.previewDeploymentSetting"></a>

```csharp
public string PreviewDeploymentSetting { get; }
```

- *Type:* string

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionBranch"></a>

```csharp
public string ProductionBranch { get; }
```

- *Type:* string

---

##### `ProductionDeploymentEnabled`<sup>Required</sup> <a name="ProductionDeploymentEnabled" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.productionDeploymentEnabled"></a>

```csharp
public object ProductionDeploymentEnabled { get; }
```

- *Type:* object

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.repoName"></a>

```csharp
public string RepoName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference.property.internalValue"></a>

```csharp
public PagesProjectSourceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---


### PagesProjectSourceOutputReference <a name="PagesProjectSourceOutputReference" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new PagesProjectSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig"></a>

```csharp
private void PutConfig(PagesProjectSourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.config"></a>

```csharp
public PagesProjectSourceConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfigOutputReference">PagesProjectSourceConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.configInput"></a>

```csharp
public PagesProjectSourceConfig ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceConfig">PagesProjectSourceConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.pagesProject.PagesProjectSourceOutputReference.property.internalValue"></a>

```csharp
public PagesProjectSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.pagesProject.PagesProjectSource">PagesProjectSource</a>

---



