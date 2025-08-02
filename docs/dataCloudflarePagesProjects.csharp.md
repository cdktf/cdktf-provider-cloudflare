# `dataCloudflarePagesProjects` Submodule <a name="`dataCloudflarePagesProjects` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePagesProjects <a name="DataCloudflarePagesProjects" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_projects cloudflare_pages_projects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjects(Construct Scope, string Id, DataCloudflarePagesProjectsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig">DataCloudflarePagesProjectsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig">DataCloudflarePagesProjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePagesProjects resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePagesProjects.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePagesProjects.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePagesProjects.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflarePagesProjects.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflarePagesProjects resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePagesProjects to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePagesProjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_projects#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePagesProjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList">DataCloudflarePagesProjectsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.result"></a>

```csharp
public DataCloudflarePagesProjectsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList">DataCloudflarePagesProjectsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjects.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePagesProjectsConfig <a name="DataCloudflarePagesProjectsConfig" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_projects#account_id DataCloudflarePagesProjects#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/pages_projects#max_items DataCloudflarePagesProjects#max_items}

---

### DataCloudflarePagesProjectsResult <a name="DataCloudflarePagesProjectsResult" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResult {

};
```


### DataCloudflarePagesProjectsResultBuildConfig <a name="DataCloudflarePagesProjectsResultBuildConfig" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultBuildConfig {

};
```


### DataCloudflarePagesProjectsResultDeploymentTrigger <a name="DataCloudflarePagesProjectsResultDeploymentTrigger" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultDeploymentTrigger {

};
```


### DataCloudflarePagesProjectsResultDeploymentTriggerMetadata <a name="DataCloudflarePagesProjectsResultDeploymentTriggerMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultDeploymentTriggerMetadata {

};
```


### DataCloudflarePagesProjectsResultEnvVars <a name="DataCloudflarePagesProjectsResultEnvVars" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVars"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVars.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultEnvVars {

};
```


### DataCloudflarePagesProjectsResultLatestStage <a name="DataCloudflarePagesProjectsResultLatestStage" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultLatestStage {

};
```


### DataCloudflarePagesProjectsResultSource <a name="DataCloudflarePagesProjectsResultSource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultSource {

};
```


### DataCloudflarePagesProjectsResultSourceConfig <a name="DataCloudflarePagesProjectsResultSourceConfig" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultSourceConfig {

};
```


### DataCloudflarePagesProjectsResultStages <a name="DataCloudflarePagesProjectsResultStages" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultStages {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePagesProjectsResultBuildConfigOutputReference <a name="DataCloudflarePagesProjectsResultBuildConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultBuildConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.buildCaching">BuildCaching</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.buildCommand">BuildCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.destinationDir">DestinationDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.rootDir">RootDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.webAnalyticsTag">WebAnalyticsTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.webAnalyticsToken">WebAnalyticsToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfig">DataCloudflarePagesProjectsResultBuildConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuildCaching`<sup>Required</sup> <a name="BuildCaching" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.buildCaching"></a>

```csharp
public IResolvable BuildCaching { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BuildCommand`<sup>Required</sup> <a name="BuildCommand" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.buildCommand"></a>

```csharp
public string BuildCommand { get; }
```

- *Type:* string

---

##### `DestinationDir`<sup>Required</sup> <a name="DestinationDir" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.destinationDir"></a>

```csharp
public string DestinationDir { get; }
```

- *Type:* string

---

##### `RootDir`<sup>Required</sup> <a name="RootDir" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.rootDir"></a>

```csharp
public string RootDir { get; }
```

- *Type:* string

---

##### `WebAnalyticsTag`<sup>Required</sup> <a name="WebAnalyticsTag" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.webAnalyticsTag"></a>

```csharp
public string WebAnalyticsTag { get; }
```

- *Type:* string

---

##### `WebAnalyticsToken`<sup>Required</sup> <a name="WebAnalyticsToken" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.webAnalyticsToken"></a>

```csharp
public string WebAnalyticsToken { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResultBuildConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfig">DataCloudflarePagesProjectsResultBuildConfig</a>

---


### DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference <a name="DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.commitHash">CommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.commitMessage">CommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadata">DataCloudflarePagesProjectsResultDeploymentTriggerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CommitHash`<sup>Required</sup> <a name="CommitHash" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.commitHash"></a>

```csharp
public string CommitHash { get; }
```

- *Type:* string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.commitMessage"></a>

```csharp
public string CommitMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResultDeploymentTriggerMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadata">DataCloudflarePagesProjectsResultDeploymentTriggerMetadata</a>

---


### DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference <a name="DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference">DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTrigger">DataCloudflarePagesProjectsResultDeploymentTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.metadata"></a>

```csharp
public DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference">DataCloudflarePagesProjectsResultDeploymentTriggerMetadataOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResultDeploymentTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTrigger">DataCloudflarePagesProjectsResultDeploymentTrigger</a>

---


### DataCloudflarePagesProjectsResultEnvVarsMap <a name="DataCloudflarePagesProjectsResultEnvVarsMap" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultEnvVarsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.get"></a>

```csharp
private DataCloudflarePagesProjectsResultEnvVarsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflarePagesProjectsResultEnvVarsOutputReference <a name="DataCloudflarePagesProjectsResultEnvVarsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultEnvVarsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVars">DataCloudflarePagesProjectsResultEnvVars</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResultEnvVars InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVars">DataCloudflarePagesProjectsResultEnvVars</a>

---


### DataCloudflarePagesProjectsResultLatestStageOutputReference <a name="DataCloudflarePagesProjectsResultLatestStageOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultLatestStageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.endedOn">EndedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.startedOn">StartedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStage">DataCloudflarePagesProjectsResultLatestStage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndedOn`<sup>Required</sup> <a name="EndedOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.endedOn"></a>

```csharp
public string EndedOn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartedOn`<sup>Required</sup> <a name="StartedOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.startedOn"></a>

```csharp
public string StartedOn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResultLatestStage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStage">DataCloudflarePagesProjectsResultLatestStage</a>

---


### DataCloudflarePagesProjectsResultList <a name="DataCloudflarePagesProjectsResultList" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.get"></a>

```csharp
private DataCloudflarePagesProjectsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflarePagesProjectsResultOutputReference <a name="DataCloudflarePagesProjectsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference">DataCloudflarePagesProjectsResultBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.deploymentTrigger">DeploymentTrigger</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference">DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.envVars">EnvVars</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap">DataCloudflarePagesProjectsResultEnvVarsMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.isSkipped">IsSkipped</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.latestStage">LatestStage</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference">DataCloudflarePagesProjectsResultLatestStageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.shortId">ShortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference">DataCloudflarePagesProjectsResultSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.stages">Stages</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList">DataCloudflarePagesProjectsResultStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResult">DataCloudflarePagesProjectsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.buildConfig"></a>

```csharp
public DataCloudflarePagesProjectsResultBuildConfigOutputReference BuildConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultBuildConfigOutputReference">DataCloudflarePagesProjectsResultBuildConfigOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DeploymentTrigger`<sup>Required</sup> <a name="DeploymentTrigger" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.deploymentTrigger"></a>

```csharp
public DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference DeploymentTrigger { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference">DataCloudflarePagesProjectsResultDeploymentTriggerOutputReference</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `EnvVars`<sup>Required</sup> <a name="EnvVars" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.envVars"></a>

```csharp
public DataCloudflarePagesProjectsResultEnvVarsMap EnvVars { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultEnvVarsMap">DataCloudflarePagesProjectsResultEnvVarsMap</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSkipped`<sup>Required</sup> <a name="IsSkipped" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.isSkipped"></a>

```csharp
public IResolvable IsSkipped { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LatestStage`<sup>Required</sup> <a name="LatestStage" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.latestStage"></a>

```csharp
public DataCloudflarePagesProjectsResultLatestStageOutputReference LatestStage { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultLatestStageOutputReference">DataCloudflarePagesProjectsResultLatestStageOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `ShortId`<sup>Required</sup> <a name="ShortId" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.shortId"></a>

```csharp
public string ShortId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.source"></a>

```csharp
public DataCloudflarePagesProjectsResultSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference">DataCloudflarePagesProjectsResultSourceOutputReference</a>

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.stages"></a>

```csharp
public DataCloudflarePagesProjectsResultStagesList Stages { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList">DataCloudflarePagesProjectsResultStagesList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResult">DataCloudflarePagesProjectsResult</a>

---


### DataCloudflarePagesProjectsResultSourceConfigOutputReference <a name="DataCloudflarePagesProjectsResultSourceConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.deploymentsEnabled">DeploymentsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.pathExcludes">PathExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.pathIncludes">PathIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.prCommentsEnabled">PrCommentsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.previewBranchExcludes">PreviewBranchExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.previewBranchIncludes">PreviewBranchIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.previewDeploymentSetting">PreviewDeploymentSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.productionBranch">ProductionBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.productionDeploymentsEnabled">ProductionDeploymentsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.repoName">RepoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfig">DataCloudflarePagesProjectsResultSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentsEnabled`<sup>Required</sup> <a name="DeploymentsEnabled" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.deploymentsEnabled"></a>

```csharp
public IResolvable DeploymentsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PathExcludes`<sup>Required</sup> <a name="PathExcludes" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.pathExcludes"></a>

```csharp
public string[] PathExcludes { get; }
```

- *Type:* string[]

---

##### `PathIncludes`<sup>Required</sup> <a name="PathIncludes" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.pathIncludes"></a>

```csharp
public string[] PathIncludes { get; }
```

- *Type:* string[]

---

##### `PrCommentsEnabled`<sup>Required</sup> <a name="PrCommentsEnabled" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.prCommentsEnabled"></a>

```csharp
public IResolvable PrCommentsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PreviewBranchExcludes`<sup>Required</sup> <a name="PreviewBranchExcludes" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.previewBranchExcludes"></a>

```csharp
public string[] PreviewBranchExcludes { get; }
```

- *Type:* string[]

---

##### `PreviewBranchIncludes`<sup>Required</sup> <a name="PreviewBranchIncludes" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.previewBranchIncludes"></a>

```csharp
public string[] PreviewBranchIncludes { get; }
```

- *Type:* string[]

---

##### `PreviewDeploymentSetting`<sup>Required</sup> <a name="PreviewDeploymentSetting" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.previewDeploymentSetting"></a>

```csharp
public string PreviewDeploymentSetting { get; }
```

- *Type:* string

---

##### `ProductionBranch`<sup>Required</sup> <a name="ProductionBranch" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.productionBranch"></a>

```csharp
public string ProductionBranch { get; }
```

- *Type:* string

---

##### `ProductionDeploymentsEnabled`<sup>Required</sup> <a name="ProductionDeploymentsEnabled" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.productionDeploymentsEnabled"></a>

```csharp
public IResolvable ProductionDeploymentsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.repoName"></a>

```csharp
public string RepoName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResultSourceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfig">DataCloudflarePagesProjectsResultSourceConfig</a>

---


### DataCloudflarePagesProjectsResultSourceOutputReference <a name="DataCloudflarePagesProjectsResultSourceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference">DataCloudflarePagesProjectsResultSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSource">DataCloudflarePagesProjectsResultSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.config"></a>

```csharp
public DataCloudflarePagesProjectsResultSourceConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceConfigOutputReference">DataCloudflarePagesProjectsResultSourceConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSourceOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResultSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultSource">DataCloudflarePagesProjectsResultSource</a>

---


### DataCloudflarePagesProjectsResultStagesList <a name="DataCloudflarePagesProjectsResultStagesList" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.get"></a>

```csharp
private DataCloudflarePagesProjectsResultStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflarePagesProjectsResultStagesOutputReference <a name="DataCloudflarePagesProjectsResultStagesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflarePagesProjectsResultStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.endedOn">EndedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.startedOn">StartedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStages">DataCloudflarePagesProjectsResultStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndedOn`<sup>Required</sup> <a name="EndedOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.endedOn"></a>

```csharp
public string EndedOn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartedOn`<sup>Required</sup> <a name="StartedOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.startedOn"></a>

```csharp
public string StartedOn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStagesOutputReference.property.internalValue"></a>

```csharp
public DataCloudflarePagesProjectsResultStages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesProjects.DataCloudflarePagesProjectsResultStages">DataCloudflarePagesProjectsResultStages</a>

---



