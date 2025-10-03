# `dataCloudflareRegistrarDomains` Submodule <a name="`dataCloudflareRegistrarDomains` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareRegistrarDomains <a name="DataCloudflareRegistrarDomains" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/registrar_domains cloudflare_registrar_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomains(Construct Scope, string Id, DataCloudflareRegistrarDomainsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig">DataCloudflareRegistrarDomainsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig">DataCloudflareRegistrarDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareRegistrarDomains resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRegistrarDomains.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRegistrarDomains.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRegistrarDomains.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareRegistrarDomains.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareRegistrarDomains resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareRegistrarDomains to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareRegistrarDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/registrar_domains#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareRegistrarDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList">DataCloudflareRegistrarDomainsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.result"></a>

```csharp
public DataCloudflareRegistrarDomainsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList">DataCloudflareRegistrarDomainsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomains.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareRegistrarDomainsConfig <a name="DataCloudflareRegistrarDomainsConfig" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomainsConfig {
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/registrar_domains#account_id DataCloudflareRegistrarDomains#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/registrar_domains#max_items DataCloudflareRegistrarDomains#max_items}

---

### DataCloudflareRegistrarDomainsResult <a name="DataCloudflareRegistrarDomainsResult" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomainsResult {

};
```


### DataCloudflareRegistrarDomainsResultRegistrantContact <a name="DataCloudflareRegistrarDomainsResultRegistrantContact" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomainsResultRegistrantContact {

};
```


### DataCloudflareRegistrarDomainsResultTransferIn <a name="DataCloudflareRegistrarDomainsResultTransferIn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomainsResultTransferIn {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareRegistrarDomainsResultList <a name="DataCloudflareRegistrarDomainsResultList" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomainsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get"></a>

```csharp
private DataCloudflareRegistrarDomainsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareRegistrarDomainsResultOutputReference <a name="DataCloudflareRegistrarDomainsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomainsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.available">Available</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.canRegister">CanRegister</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.currentRegistrar">CurrentRegistrar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.locked">Locked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference">DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registryStatuses">RegistryStatuses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.supportedTld">SupportedTld</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.transferIn">TransferIn</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference">DataCloudflareRegistrarDomainsResultTransferInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult">DataCloudflareRegistrarDomainsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.available"></a>

```csharp
public IResolvable Available { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CanRegister`<sup>Required</sup> <a name="CanRegister" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.canRegister"></a>

```csharp
public IResolvable CanRegister { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CurrentRegistrar`<sup>Required</sup> <a name="CurrentRegistrar" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.currentRegistrar"></a>

```csharp
public string CurrentRegistrar { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.locked"></a>

```csharp
public IResolvable Locked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registrantContact"></a>

```csharp
public DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference RegistrantContact { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference">DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference</a>

---

##### `RegistryStatuses`<sup>Required</sup> <a name="RegistryStatuses" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.registryStatuses"></a>

```csharp
public string RegistryStatuses { get; }
```

- *Type:* string

---

##### `SupportedTld`<sup>Required</sup> <a name="SupportedTld" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.supportedTld"></a>

```csharp
public IResolvable SupportedTld { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TransferIn`<sup>Required</sup> <a name="TransferIn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.transferIn"></a>

```csharp
public DataCloudflareRegistrarDomainsResultTransferInOutputReference TransferIn { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference">DataCloudflareRegistrarDomainsResultTransferInOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRegistrarDomainsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResult">DataCloudflareRegistrarDomainsResult</a>

---


### DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference <a name="DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fax">Fax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.phone">Phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.zip">Zip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact">DataCloudflareRegistrarDomainsResultRegistrantContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Fax`<sup>Required</sup> <a name="Fax" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.fax"></a>

```csharp
public string Fax { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.phone"></a>

```csharp
public string Phone { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Zip`<sup>Required</sup> <a name="Zip" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.zip"></a>

```csharp
public string Zip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRegistrarDomainsResultRegistrantContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultRegistrantContact">DataCloudflareRegistrarDomainsResultRegistrantContact</a>

---


### DataCloudflareRegistrarDomainsResultTransferInOutputReference <a name="DataCloudflareRegistrarDomainsResultTransferInOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareRegistrarDomainsResultTransferInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.acceptFoa">AcceptFoa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.approveTransfer">ApproveTransfer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.canCancelTransfer">CanCancelTransfer</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.disablePrivacy">DisablePrivacy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.enterAuthCode">EnterAuthCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.unlockDomain">UnlockDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn">DataCloudflareRegistrarDomainsResultTransferIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptFoa`<sup>Required</sup> <a name="AcceptFoa" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.acceptFoa"></a>

```csharp
public string AcceptFoa { get; }
```

- *Type:* string

---

##### `ApproveTransfer`<sup>Required</sup> <a name="ApproveTransfer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.approveTransfer"></a>

```csharp
public string ApproveTransfer { get; }
```

- *Type:* string

---

##### `CanCancelTransfer`<sup>Required</sup> <a name="CanCancelTransfer" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.canCancelTransfer"></a>

```csharp
public IResolvable CanCancelTransfer { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisablePrivacy`<sup>Required</sup> <a name="DisablePrivacy" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.disablePrivacy"></a>

```csharp
public string DisablePrivacy { get; }
```

- *Type:* string

---

##### `EnterAuthCode`<sup>Required</sup> <a name="EnterAuthCode" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.enterAuthCode"></a>

```csharp
public string EnterAuthCode { get; }
```

- *Type:* string

---

##### `UnlockDomain`<sup>Required</sup> <a name="UnlockDomain" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.unlockDomain"></a>

```csharp
public string UnlockDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferInOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareRegistrarDomainsResultTransferIn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRegistrarDomains.DataCloudflareRegistrarDomainsResultTransferIn">DataCloudflareRegistrarDomainsResultTransferIn</a>

---



