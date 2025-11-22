# `dataCloudflareWorkerVersions` Submodule <a name="`dataCloudflareWorkerVersions` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkerVersions <a name="DataCloudflareWorkerVersions" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/worker_versions cloudflare_worker_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersions(Construct Scope, string Id, DataCloudflareWorkerVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig">DataCloudflareWorkerVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig">DataCloudflareWorkerVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkerVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkerVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkerVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkerVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkerVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkerVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/worker_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkerVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList">DataCloudflareWorkerVersionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerIdInput">WorkerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerId">WorkerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.result"></a>

```csharp
public DataCloudflareWorkerVersionsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList">DataCloudflareWorkerVersionsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `WorkerIdInput`<sup>Optional</sup> <a name="WorkerIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerIdInput"></a>

```csharp
public string WorkerIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerId"></a>

```csharp
public string WorkerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkerVersionsConfig <a name="DataCloudflareWorkerVersionsConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string WorkerId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.workerId">WorkerId</a></code> | <code>string</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/worker_versions#account_id DataCloudflareWorkerVersions#account_id}

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.workerId"></a>

```csharp
public string WorkerId { get; set; }
```

- *Type:* string

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/worker_versions#worker_id DataCloudflareWorkerVersions#worker_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/worker_versions#max_items DataCloudflareWorkerVersions#max_items}

---

### DataCloudflareWorkerVersionsResult <a name="DataCloudflareWorkerVersionsResult" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResult {

};
```


### DataCloudflareWorkerVersionsResultAnnotations <a name="DataCloudflareWorkerVersionsResultAnnotations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultAnnotations {

};
```


### DataCloudflareWorkerVersionsResultAssets <a name="DataCloudflareWorkerVersionsResultAssets" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultAssets {

};
```


### DataCloudflareWorkerVersionsResultAssetsConfig <a name="DataCloudflareWorkerVersionsResultAssetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultAssetsConfig {

};
```


### DataCloudflareWorkerVersionsResultBindings <a name="DataCloudflareWorkerVersionsResultBindings" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultBindings {

};
```


### DataCloudflareWorkerVersionsResultBindingsOutbound <a name="DataCloudflareWorkerVersionsResultBindingsOutbound" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultBindingsOutbound {

};
```


### DataCloudflareWorkerVersionsResultBindingsOutboundWorker <a name="DataCloudflareWorkerVersionsResultBindingsOutboundWorker" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultBindingsOutboundWorker {

};
```


### DataCloudflareWorkerVersionsResultLimits <a name="DataCloudflareWorkerVersionsResultLimits" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultLimits {

};
```


### DataCloudflareWorkerVersionsResultMigrations <a name="DataCloudflareWorkerVersionsResultMigrations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrations {

};
```


### DataCloudflareWorkerVersionsResultMigrationsRenamedClasses <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsRenamedClasses {

};
```


### DataCloudflareWorkerVersionsResultMigrationsSteps <a name="DataCloudflareWorkerVersionsResultMigrationsSteps" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsSteps {

};
```


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses {

};
```


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses {

};
```


### DataCloudflareWorkerVersionsResultMigrationsTransferredClasses <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsTransferredClasses {

};
```


### DataCloudflareWorkerVersionsResultModules <a name="DataCloudflareWorkerVersionsResultModules" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultModules {

};
```


### DataCloudflareWorkerVersionsResultPlacement <a name="DataCloudflareWorkerVersionsResultPlacement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultPlacement {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkerVersionsResultAnnotationsOutputReference <a name="DataCloudflareWorkerVersionsResultAnnotationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultAnnotationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersMessage">WorkersMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTag">WorkersTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTriggeredBy">WorkersTriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations">DataCloudflareWorkerVersionsResultAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkersMessage`<sup>Required</sup> <a name="WorkersMessage" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersMessage"></a>

```csharp
public string WorkersMessage { get; }
```

- *Type:* string

---

##### `WorkersTag`<sup>Required</sup> <a name="WorkersTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTag"></a>

```csharp
public string WorkersTag { get; }
```

- *Type:* string

---

##### `WorkersTriggeredBy`<sup>Required</sup> <a name="WorkersTriggeredBy" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTriggeredBy"></a>

```csharp
public string WorkersTriggeredBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultAnnotations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations">DataCloudflareWorkerVersionsResultAnnotations</a>

---


### DataCloudflareWorkerVersionsResultAssetsConfigOutputReference <a name="DataCloudflareWorkerVersionsResultAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultAssetsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.htmlHandling">HtmlHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.notFoundHandling">NotFoundHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig">DataCloudflareWorkerVersionsResultAssetsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HtmlHandling`<sup>Required</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.htmlHandling"></a>

```csharp
public string HtmlHandling { get; }
```

- *Type:* string

---

##### `NotFoundHandling`<sup>Required</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.notFoundHandling"></a>

```csharp
public string NotFoundHandling { get; }
```

- *Type:* string

---

##### `RunWorkerFirst`<sup>Required</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.runWorkerFirst"></a>

```csharp
public string[] RunWorkerFirst { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultAssetsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig">DataCloudflareWorkerVersionsResultAssetsConfig</a>

---


### DataCloudflareWorkerVersionsResultAssetsOutputReference <a name="DataCloudflareWorkerVersionsResultAssetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference">DataCloudflareWorkerVersionsResultAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.jwt">Jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets">DataCloudflareWorkerVersionsResultAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.config"></a>

```csharp
public DataCloudflareWorkerVersionsResultAssetsConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference">DataCloudflareWorkerVersionsResultAssetsConfigOutputReference</a>

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.jwt"></a>

```csharp
public string Jwt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultAssets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets">DataCloudflareWorkerVersionsResultAssets</a>

---


### DataCloudflareWorkerVersionsResultBindingsList <a name="DataCloudflareWorkerVersionsResultBindingsList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultBindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get"></a>

```csharp
private DataCloudflareWorkerVersionsResultBindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.params">Params</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound">DataCloudflareWorkerVersionsResultBindingsOutbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.params"></a>

```csharp
public string[] Params { get; }
```

- *Type:* string[]

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.worker"></a>

```csharp
public DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference Worker { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultBindingsOutbound InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound">DataCloudflareWorkerVersionsResultBindingsOutbound</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker">DataCloudflareWorkerVersionsResultBindingsOutboundWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultBindingsOutboundWorker InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker">DataCloudflareWorkerVersionsResultBindingsOutboundWorker</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultBindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedDestinationAddresses">AllowedDestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedSenderAddresses">AllowedSenderAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyBase64">KeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyJwk">KeyJwk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.oldName">OldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.part">Part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.pipeline">Pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.storeId">StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.usages">Usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings">DataCloudflareWorkerVersionsResultBindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `AllowedDestinationAddresses`<sup>Required</sup> <a name="AllowedDestinationAddresses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedDestinationAddresses"></a>

```csharp
public string[] AllowedDestinationAddresses { get; }
```

- *Type:* string[]

---

##### `AllowedSenderAddresses`<sup>Required</sup> <a name="AllowedSenderAddresses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedSenderAddresses"></a>

```csharp
public string[] AllowedSenderAddresses { get; }
```

- *Type:* string[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; }
```

- *Type:* string

---

##### `KeyBase64`<sup>Required</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyBase64"></a>

```csharp
public string KeyBase64 { get; }
```

- *Type:* string

---

##### `KeyJwk`<sup>Required</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyJwk"></a>

```csharp
public string KeyJwk { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `OldName`<sup>Required</sup> <a name="OldName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.oldName"></a>

```csharp
public string OldName { get; }
```

- *Type:* string

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.outbound"></a>

```csharp
public DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference Outbound { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference</a>

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.part"></a>

```csharp
public string Part { get; }
```

- *Type:* string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.pipeline"></a>

```csharp
public string Pipeline { get; }
```

- *Type:* string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.storeId"></a>

```csharp
public string StoreId { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.usages"></a>

```csharp
public string[] Usages { get; }
```

- *Type:* string[]

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultBindings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings">DataCloudflareWorkerVersionsResultBindings</a>

---


### DataCloudflareWorkerVersionsResultLimitsOutputReference <a name="DataCloudflareWorkerVersionsResultLimitsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.cpuMs">CpuMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits">DataCloudflareWorkerVersionsResultLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.cpuMs"></a>

```csharp
public double CpuMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits">DataCloudflareWorkerVersionsResultLimits</a>

---


### DataCloudflareWorkerVersionsResultList <a name="DataCloudflareWorkerVersionsResultList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get"></a>

```csharp
private DataCloudflareWorkerVersionsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newClasses">NewClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newTag">NewTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.oldTag">OldTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList">DataCloudflareWorkerVersionsResultMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations">DataCloudflareWorkerVersionsResultMigrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; }
```

- *Type:* string[]

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newClasses"></a>

```csharp
public string[] NewClasses { get; }
```

- *Type:* string[]

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; }
```

- *Type:* string[]

---

##### `NewTag`<sup>Required</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newTag"></a>

```csharp
public string NewTag { get; }
```

- *Type:* string

---

##### `OldTag`<sup>Required</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.oldTag"></a>

```csharp
public string OldTag { get; }
```

- *Type:* string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.renamedClasses"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList RenamedClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.steps"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList">DataCloudflareWorkerVersionsResultMigrationsStepsList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.transferredClasses"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList TransferredClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations">DataCloudflareWorkerVersionsResultMigrations</a>

---


### DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get"></a>

```csharp
private DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsRenamedClasses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsRenamedClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get"></a>

```csharp
private DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newClasses">NewClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps">DataCloudflareWorkerVersionsResultMigrationsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; }
```

- *Type:* string[]

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newClasses"></a>

```csharp
public string[] NewClasses { get; }
```

- *Type:* string[]

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; }
```

- *Type:* string[]

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.renamedClasses"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList RenamedClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.transferredClasses"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList TransferredClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsSteps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps">DataCloudflareWorkerVersionsResultMigrationsSteps</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get"></a>

```csharp
private DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get"></a>

```csharp
private DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```csharp
public string FromScript { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get"></a>

```csharp
private DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```csharp
public string FromScript { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsTransferredClasses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsTransferredClasses</a>

---


### DataCloudflareWorkerVersionsResultModulesList <a name="DataCloudflareWorkerVersionsResultModulesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultModulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get"></a>

```csharp
private DataCloudflareWorkerVersionsResultModulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultModulesOutputReference <a name="DataCloudflareWorkerVersionsResultModulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultModulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules">DataCloudflareWorkerVersionsResultModules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultModules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules">DataCloudflareWorkerVersionsResultModules</a>

---


### DataCloudflareWorkerVersionsResultOutputReference <a name="DataCloudflareWorkerVersionsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.annotations">Annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference">DataCloudflareWorkerVersionsResultAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference">DataCloudflareWorkerVersionsResultAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.bindings">Bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList">DataCloudflareWorkerVersionsResultBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference">DataCloudflareWorkerVersionsResultLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainModule">MainModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference">DataCloudflareWorkerVersionsResultMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.modules">Modules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList">DataCloudflareWorkerVersionsResultModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference">DataCloudflareWorkerVersionsResultPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.usageModel">UsageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult">DataCloudflareWorkerVersionsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.annotations"></a>

```csharp
public DataCloudflareWorkerVersionsResultAnnotationsOutputReference Annotations { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference">DataCloudflareWorkerVersionsResultAnnotationsOutputReference</a>

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.assets"></a>

```csharp
public DataCloudflareWorkerVersionsResultAssetsOutputReference Assets { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference">DataCloudflareWorkerVersionsResultAssetsOutputReference</a>

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.bindings"></a>

```csharp
public DataCloudflareWorkerVersionsResultBindingsList Bindings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList">DataCloudflareWorkerVersionsResultBindingsList</a>

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; }
```

- *Type:* string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; }
```

- *Type:* string[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.limits"></a>

```csharp
public DataCloudflareWorkerVersionsResultLimitsOutputReference Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference">DataCloudflareWorkerVersionsResultLimitsOutputReference</a>

---

##### `MainModule`<sup>Required</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainModule"></a>

```csharp
public string MainModule { get; }
```

- *Type:* string

---

##### `Migrations`<sup>Required</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrations"></a>

```csharp
public DataCloudflareWorkerVersionsResultMigrationsOutputReference Migrations { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference">DataCloudflareWorkerVersionsResultMigrationsOutputReference</a>

---

##### `Modules`<sup>Required</sup> <a name="Modules" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.modules"></a>

```csharp
public DataCloudflareWorkerVersionsResultModulesList Modules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList">DataCloudflareWorkerVersionsResultModulesList</a>

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.placement"></a>

```csharp
public DataCloudflareWorkerVersionsResultPlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference">DataCloudflareWorkerVersionsResultPlacementOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.usageModel"></a>

```csharp
public string UsageModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult">DataCloudflareWorkerVersionsResult</a>

---


### DataCloudflareWorkerVersionsResultPlacementOutputReference <a name="DataCloudflareWorkerVersionsResultPlacementOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkerVersionsResultPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement">DataCloudflareWorkerVersionsResultPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareWorkerVersionsResultPlacement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement">DataCloudflareWorkerVersionsResultPlacement</a>

---



