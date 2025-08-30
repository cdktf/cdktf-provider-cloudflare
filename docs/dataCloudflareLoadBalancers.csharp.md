# `dataCloudflareLoadBalancers` Submodule <a name="`dataCloudflareLoadBalancers` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancers <a name="DataCloudflareLoadBalancers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers cloudflare_load_balancers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancers(Construct Scope, string Id, DataCloudflareLoadBalancersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig">DataCloudflareLoadBalancersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig">DataCloudflareLoadBalancersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLoadBalancers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLoadBalancers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLoadBalancers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLoadBalancers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLoadBalancers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareLoadBalancers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLoadBalancers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLoadBalancers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList">DataCloudflareLoadBalancersResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.result"></a>

```csharp
public DataCloudflareLoadBalancersResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList">DataCloudflareLoadBalancersResultList</a>

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancersConfig <a name="DataCloudflareLoadBalancersConfig" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#zone_id DataCloudflareLoadBalancers#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#zone_id DataCloudflareLoadBalancers#zone_id}.

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#max_items DataCloudflareLoadBalancers#max_items}

---

### DataCloudflareLoadBalancersResult <a name="DataCloudflareLoadBalancersResult" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResult {
    object CountryPools = null,
    object PopPools = null,
    object RegionPools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.countryPools">CountryPools</a></code> | <code>object</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.popPools">PopPools</a></code> | <code>object</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.regionPools">RegionPools</a></code> | <code>object</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |

---

##### `CountryPools`<sup>Optional</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.countryPools"></a>

```csharp
public object CountryPools { get; set; }
```

- *Type:* object

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}

---

##### `PopPools`<sup>Optional</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.popPools"></a>

```csharp
public object PopPools { get; set; }
```

- *Type:* object

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}

---

##### `RegionPools`<sup>Optional</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult.property.regionPools"></a>

```csharp
public object RegionPools { get; set; }
```

- *Type:* object

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}

---

### DataCloudflareLoadBalancersResultAdaptiveRouting <a name="DataCloudflareLoadBalancersResultAdaptiveRouting" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultAdaptiveRouting {

};
```


### DataCloudflareLoadBalancersResultLocationStrategy <a name="DataCloudflareLoadBalancersResultLocationStrategy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultLocationStrategy {

};
```


### DataCloudflareLoadBalancersResultRandomSteering <a name="DataCloudflareLoadBalancersResultRandomSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRandomSteering {

};
```


### DataCloudflareLoadBalancersResultRules <a name="DataCloudflareLoadBalancersResultRules" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRules {

};
```


### DataCloudflareLoadBalancersResultRulesFixedResponse <a name="DataCloudflareLoadBalancersResultRulesFixedResponse" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesFixedResponse {

};
```


### DataCloudflareLoadBalancersResultRulesOverrides <a name="DataCloudflareLoadBalancersResultRulesOverrides" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverrides {
    object CountryPools = null,
    object PopPools = null,
    object RegionPools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.countryPools">CountryPools</a></code> | <code>object</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.popPools">PopPools</a></code> | <code>object</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.regionPools">RegionPools</a></code> | <code>object</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |

---

##### `CountryPools`<sup>Optional</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.countryPools"></a>

```csharp
public object CountryPools { get; set; }
```

- *Type:* object

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#country_pools DataCloudflareLoadBalancers#country_pools}

---

##### `PopPools`<sup>Optional</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.popPools"></a>

```csharp
public object PopPools { get; set; }
```

- *Type:* object

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#pop_pools DataCloudflareLoadBalancers#pop_pools}

---

##### `RegionPools`<sup>Optional</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides.property.regionPools"></a>

```csharp
public object RegionPools { get; set; }
```

- *Type:* object

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#region_pools DataCloudflareLoadBalancers#region_pools}

---

### DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting <a name="DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting {

};
```


### DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy <a name="DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy {

};
```


### DataCloudflareLoadBalancersResultRulesOverridesRandomSteering <a name="DataCloudflareLoadBalancersResultRulesOverridesRandomSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesRandomSteering {

};
```


### DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes <a name="DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes {
    double DrainDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.property.drainDuration">DrainDuration</a></code> | <code>double</code> | Configures the drain duration in seconds. |

---

##### `DrainDuration`<sup>Optional</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes.property.drainDuration"></a>

```csharp
public double DrainDuration { get; set; }
```

- *Type:* double

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}

---

### DataCloudflareLoadBalancersResultSessionAffinityAttributes <a name="DataCloudflareLoadBalancersResultSessionAffinityAttributes" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultSessionAffinityAttributes {
    double DrainDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.property.drainDuration">DrainDuration</a></code> | <code>double</code> | Configures the drain duration in seconds. |

---

##### `DrainDuration`<sup>Optional</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes.property.drainDuration"></a>

```csharp
public double DrainDuration { get; set; }
```

- *Type:* double

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/load_balancers#drain_duration DataCloudflareLoadBalancers#drain_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference <a name="DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.failoverAcrossPools">FailoverAcrossPools</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting">DataCloudflareLoadBalancersResultAdaptiveRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverAcrossPools`<sup>Required</sup> <a name="FailoverAcrossPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```csharp
public IResolvable FailoverAcrossPools { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultAdaptiveRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRouting">DataCloudflareLoadBalancersResultAdaptiveRouting</a>

---


### DataCloudflareLoadBalancersResultList <a name="DataCloudflareLoadBalancersResultList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get"></a>

```csharp
private DataCloudflareLoadBalancersResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataCloudflareLoadBalancersResultLocationStrategyOutputReference <a name="DataCloudflareLoadBalancersResultLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultLocationStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.preferEcs">PreferEcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy">DataCloudflareLoadBalancersResultLocationStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `PreferEcs`<sup>Required</sup> <a name="PreferEcs" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.preferEcs"></a>

```csharp
public string PreferEcs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultLocationStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategy">DataCloudflareLoadBalancersResultLocationStrategy</a>

---


### DataCloudflareLoadBalancersResultOutputReference <a name="DataCloudflareLoadBalancersResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetCountryPools">ResetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetPopPools">ResetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetRegionPools">ResetRegionPools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryPools` <a name="ResetCountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetCountryPools"></a>

```csharp
private void ResetCountryPools()
```

##### `ResetPopPools` <a name="ResetPopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetPopPools"></a>

```csharp
private void ResetPopPools()
```

##### `ResetRegionPools` <a name="ResetRegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.resetRegionPools"></a>

```csharp
private void ResetRegionPools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.adaptiveRouting">AdaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.defaultPools">DefaultPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fallbackPool">FallbackPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.locationStrategy">LocationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference">DataCloudflareLoadBalancersResultLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.networks">Networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.proxied">Proxied</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.randomSteering">RandomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList">DataCloudflareLoadBalancersResultRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityAttributes">SessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.steeringPolicy">SteeringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.zoneName">ZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPoolsInput">CountryPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPoolsInput">PopPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPoolsInput">RegionPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPools">CountryPools</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPools">PopPools</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPools">RegionPools</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult">DataCloudflareLoadBalancersResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdaptiveRouting`<sup>Required</sup> <a name="AdaptiveRouting" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.adaptiveRouting"></a>

```csharp
public DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference AdaptiveRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultAdaptiveRoutingOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DefaultPools`<sup>Required</sup> <a name="DefaultPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.defaultPools"></a>

```csharp
public string[] DefaultPools { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FallbackPool`<sup>Required</sup> <a name="FallbackPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.fallbackPool"></a>

```csharp
public string FallbackPool { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationStrategy`<sup>Required</sup> <a name="LocationStrategy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.locationStrategy"></a>

```csharp
public DataCloudflareLoadBalancersResultLocationStrategyOutputReference LocationStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultLocationStrategyOutputReference">DataCloudflareLoadBalancersResultLocationStrategyOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.networks"></a>

```csharp
public string[] Networks { get; }
```

- *Type:* string[]

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.proxied"></a>

```csharp
public IResolvable Proxied { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RandomSteering`<sup>Required</sup> <a name="RandomSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.randomSteering"></a>

```csharp
public DataCloudflareLoadBalancersResultRandomSteeringOutputReference RandomSteering { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRandomSteeringOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.rules"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList">DataCloudflareLoadBalancersResultRulesList</a>

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; }
```

- *Type:* string

---

##### `SessionAffinityAttributes`<sup>Required</sup> <a name="SessionAffinityAttributes" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityAttributes"></a>

```csharp
public DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference SessionAffinityAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference</a>

---

##### `SessionAffinityTtl`<sup>Required</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.sessionAffinityTtl"></a>

```csharp
public double SessionAffinityTtl { get; }
```

- *Type:* double

---

##### `SteeringPolicy`<sup>Required</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.steeringPolicy"></a>

```csharp
public string SteeringPolicy { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.zoneName"></a>

```csharp
public string ZoneName { get; }
```

- *Type:* string

---

##### `CountryPoolsInput`<sup>Optional</sup> <a name="CountryPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPoolsInput"></a>

```csharp
public object CountryPoolsInput { get; }
```

- *Type:* object

---

##### `PopPoolsInput`<sup>Optional</sup> <a name="PopPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPoolsInput"></a>

```csharp
public object PopPoolsInput { get; }
```

- *Type:* object

---

##### `RegionPoolsInput`<sup>Optional</sup> <a name="RegionPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPoolsInput"></a>

```csharp
public object RegionPoolsInput { get; }
```

- *Type:* object

---

##### `CountryPools`<sup>Required</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.countryPools"></a>

```csharp
public object CountryPools { get; }
```

- *Type:* object

---

##### `PopPools`<sup>Required</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.popPools"></a>

```csharp
public object PopPools { get; }
```

- *Type:* object

---

##### `RegionPools`<sup>Required</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.regionPools"></a>

```csharp
public object RegionPools { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResult">DataCloudflareLoadBalancersResult</a>

---


### DataCloudflareLoadBalancersResultRandomSteeringOutputReference <a name="DataCloudflareLoadBalancersResultRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRandomSteeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.defaultWeight">DefaultWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.poolWeights">PoolWeights</a></code> | <code>HashiCorp.Cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering">DataCloudflareLoadBalancersResultRandomSteering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultWeight`<sup>Required</sup> <a name="DefaultWeight" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.defaultWeight"></a>

```csharp
public double DefaultWeight { get; }
```

- *Type:* double

---

##### `PoolWeights`<sup>Required</sup> <a name="PoolWeights" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.poolWeights"></a>

```csharp
public NumberMap PoolWeights { get; }
```

- *Type:* HashiCorp.Cdktf.NumberMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteeringOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultRandomSteering InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRandomSteering">DataCloudflareLoadBalancersResultRandomSteering</a>

---


### DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference <a name="DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse">DataCloudflareLoadBalancersResultRulesFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.messageBody"></a>

```csharp
public string MessageBody { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesFixedResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponse">DataCloudflareLoadBalancersResultRulesFixedResponse</a>

---


### DataCloudflareLoadBalancersResultRulesList <a name="DataCloudflareLoadBalancersResultRulesList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get"></a>

```csharp
private DataCloudflareLoadBalancersResultRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareLoadBalancersResultRulesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference">DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.terminates">Terminates</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules">DataCloudflareLoadBalancersResultRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.fixedResponse"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference FixedResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference">DataCloudflareLoadBalancersResultRulesFixedResponseOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.overrides"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesOutputReference Overrides { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesOutputReference</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Terminates`<sup>Required</sup> <a name="Terminates" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.terminates"></a>

```csharp
public IResolvable Terminates { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRules">DataCloudflareLoadBalancersResultRules</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools">FailoverAcrossPools</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverAcrossPools`<sup>Required</sup> <a name="FailoverAcrossPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```csharp
public IResolvable FailoverAcrossPools { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRouting</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.preferEcs">PreferEcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `PreferEcs`<sup>Required</sup> <a name="PreferEcs" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.preferEcs"></a>

```csharp
public string PreferEcs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategy</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetCountryPools">ResetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetPopPools">ResetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetRegionPools">ResetRegionPools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountryPools` <a name="ResetCountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetCountryPools"></a>

```csharp
private void ResetCountryPools()
```

##### `ResetPopPools` <a name="ResetPopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetPopPools"></a>

```csharp
private void ResetPopPools()
```

##### `ResetRegionPools` <a name="ResetRegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.resetRegionPools"></a>

```csharp
private void ResetRegionPools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.adaptiveRouting">AdaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.defaultPools">DefaultPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fallbackPool">FallbackPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.locationStrategy">LocationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.randomSteering">RandomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityAttributes">SessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityTtl">SessionAffinityTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.steeringPolicy">SteeringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPoolsInput">CountryPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPoolsInput">PopPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPoolsInput">RegionPoolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPools">CountryPools</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPools">PopPools</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPools">RegionPools</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides">DataCloudflareLoadBalancersResultRulesOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdaptiveRouting`<sup>Required</sup> <a name="AdaptiveRouting" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.adaptiveRouting"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference AdaptiveRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference">DataCloudflareLoadBalancersResultRulesOverridesAdaptiveRoutingOutputReference</a>

---

##### `DefaultPools`<sup>Required</sup> <a name="DefaultPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.defaultPools"></a>

```csharp
public string[] DefaultPools { get; }
```

- *Type:* string[]

---

##### `FallbackPool`<sup>Required</sup> <a name="FallbackPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.fallbackPool"></a>

```csharp
public string FallbackPool { get; }
```

- *Type:* string

---

##### `LocationStrategy`<sup>Required</sup> <a name="LocationStrategy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.locationStrategy"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference LocationStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference">DataCloudflareLoadBalancersResultRulesOverridesLocationStrategyOutputReference</a>

---

##### `RandomSteering`<sup>Required</sup> <a name="RandomSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.randomSteering"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference RandomSteering { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference">DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference</a>

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; }
```

- *Type:* string

---

##### `SessionAffinityAttributes`<sup>Required</sup> <a name="SessionAffinityAttributes" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityAttributes"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference SessionAffinityAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference</a>

---

##### `SessionAffinityTtl`<sup>Required</sup> <a name="SessionAffinityTtl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.sessionAffinityTtl"></a>

```csharp
public double SessionAffinityTtl { get; }
```

- *Type:* double

---

##### `SteeringPolicy`<sup>Required</sup> <a name="SteeringPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.steeringPolicy"></a>

```csharp
public string SteeringPolicy { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `CountryPoolsInput`<sup>Optional</sup> <a name="CountryPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPoolsInput"></a>

```csharp
public object CountryPoolsInput { get; }
```

- *Type:* object

---

##### `PopPoolsInput`<sup>Optional</sup> <a name="PopPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPoolsInput"></a>

```csharp
public object PopPoolsInput { get; }
```

- *Type:* object

---

##### `RegionPoolsInput`<sup>Optional</sup> <a name="RegionPoolsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPoolsInput"></a>

```csharp
public object RegionPoolsInput { get; }
```

- *Type:* object

---

##### `CountryPools`<sup>Required</sup> <a name="CountryPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.countryPools"></a>

```csharp
public object CountryPools { get; }
```

- *Type:* object

---

##### `PopPools`<sup>Required</sup> <a name="PopPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.popPools"></a>

```csharp
public object PopPools { get; }
```

- *Type:* object

---

##### `RegionPools`<sup>Required</sup> <a name="RegionPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.regionPools"></a>

```csharp
public object RegionPools { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverrides">DataCloudflareLoadBalancersResultRulesOverrides</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.defaultWeight">DefaultWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.poolWeights">PoolWeights</a></code> | <code>HashiCorp.Cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering">DataCloudflareLoadBalancersResultRulesOverridesRandomSteering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultWeight`<sup>Required</sup> <a name="DefaultWeight" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.defaultWeight"></a>

```csharp
public double DefaultWeight { get; }
```

- *Type:* double

---

##### `PoolWeights`<sup>Required</sup> <a name="PoolWeights" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.poolWeights"></a>

```csharp
public NumberMap PoolWeights { get; }
```

- *Type:* HashiCorp.Cdktf.NumberMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteeringOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesRandomSteering InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesRandomSteering">DataCloudflareLoadBalancersResultRulesOverridesRandomSteering</a>

---


### DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference <a name="DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration">ResetDrainDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainDuration` <a name="ResetDrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```csharp
private void ResetDrainDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.headers">Headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders">RequireAllHeaders</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.samesite">Samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.secure">Secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">ZeroDowntimeFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput">DrainDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration">DrainDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.headers"></a>

```csharp
public string[] Headers { get; }
```

- *Type:* string[]

---

##### `RequireAllHeaders`<sup>Required</sup> <a name="RequireAllHeaders" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```csharp
public IResolvable RequireAllHeaders { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Samesite`<sup>Required</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.samesite"></a>

```csharp
public string Samesite { get; }
```

- *Type:* string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.secure"></a>

```csharp
public string Secure { get; }
```

- *Type:* string

---

##### `ZeroDowntimeFailover`<sup>Required</sup> <a name="ZeroDowntimeFailover" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```csharp
public string ZeroDowntimeFailover { get; }
```

- *Type:* string

---

##### `DrainDurationInput`<sup>Optional</sup> <a name="DrainDurationInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```csharp
public double DrainDurationInput { get; }
```

- *Type:* double

---

##### `DrainDuration`<sup>Required</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```csharp
public double DrainDuration { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes">DataCloudflareLoadBalancersResultRulesOverridesSessionAffinityAttributes</a>

---


### DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference <a name="DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resetDrainDuration">ResetDrainDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDrainDuration` <a name="ResetDrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```csharp
private void ResetDrainDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.headers">Headers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.requireAllHeaders">RequireAllHeaders</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.samesite">Samesite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.secure">Secure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">ZeroDowntimeFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDurationInput">DrainDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDuration">DrainDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes">DataCloudflareLoadBalancersResultSessionAffinityAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.headers"></a>

```csharp
public string[] Headers { get; }
```

- *Type:* string[]

---

##### `RequireAllHeaders`<sup>Required</sup> <a name="RequireAllHeaders" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```csharp
public IResolvable RequireAllHeaders { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Samesite`<sup>Required</sup> <a name="Samesite" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.samesite"></a>

```csharp
public string Samesite { get; }
```

- *Type:* string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.secure"></a>

```csharp
public string Secure { get; }
```

- *Type:* string

---

##### `ZeroDowntimeFailover`<sup>Required</sup> <a name="ZeroDowntimeFailover" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```csharp
public string ZeroDowntimeFailover { get; }
```

- *Type:* string

---

##### `DrainDurationInput`<sup>Optional</sup> <a name="DrainDurationInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```csharp
public double DrainDurationInput { get; }
```

- *Type:* double

---

##### `DrainDuration`<sup>Required</sup> <a name="DrainDuration" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```csharp
public double DrainDuration { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancersResultSessionAffinityAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancers.DataCloudflareLoadBalancersResultSessionAffinityAttributes">DataCloudflareLoadBalancersResultSessionAffinityAttributes</a>

---



