# `dataCloudflareLoadBalancerPool` Submodule <a name="`dataCloudflareLoadBalancerPool` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancerPool <a name="DataCloudflareLoadBalancerPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/load_balancer_pool cloudflare_load_balancer_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPool(Construct Scope, string Id, DataCloudflareLoadBalancerPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig">DataCloudflareLoadBalancerPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig">DataCloudflareLoadBalancerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetPoolId">ResetPoolId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.putFilter"></a>

```csharp
private void PutFilter(DataCloudflareLoadBalancerPoolFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter">DataCloudflareLoadBalancerPoolFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetPoolId` <a name="ResetPoolId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.resetPoolId"></a>

```csharp
private void ResetPoolId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLoadBalancerPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLoadBalancerPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLoadBalancerPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLoadBalancerPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareLoadBalancerPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareLoadBalancerPool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLoadBalancerPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLoadBalancerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/load_balancer_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.checkRegions">CheckRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.disabledAt">DisabledAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference">DataCloudflareLoadBalancerPoolFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.latitude">Latitude</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.loadShedding">LoadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference">DataCloudflareLoadBalancerPoolLoadSheddingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.longitude">Longitude</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.minimumOrigins">MinimumOrigins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.monitor">Monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.networks">Networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.notificationEmail">NotificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.notificationFilter">NotificationFilter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.origins">Origins</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList">DataCloudflareLoadBalancerPoolOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.originSteering">OriginSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference">DataCloudflareLoadBalancerPoolOriginSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.poolIdInput">PoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CheckRegions`<sup>Required</sup> <a name="CheckRegions" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.checkRegions"></a>

```csharp
public string[] CheckRegions { get; }
```

- *Type:* string[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisabledAt`<sup>Required</sup> <a name="DisabledAt" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.disabledAt"></a>

```csharp
public string DisabledAt { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.filter"></a>

```csharp
public DataCloudflareLoadBalancerPoolFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference">DataCloudflareLoadBalancerPoolFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.latitude"></a>

```csharp
public double Latitude { get; }
```

- *Type:* double

---

##### `LoadShedding`<sup>Required</sup> <a name="LoadShedding" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.loadShedding"></a>

```csharp
public DataCloudflareLoadBalancerPoolLoadSheddingOutputReference LoadShedding { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference">DataCloudflareLoadBalancerPoolLoadSheddingOutputReference</a>

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.longitude"></a>

```csharp
public double Longitude { get; }
```

- *Type:* double

---

##### `MinimumOrigins`<sup>Required</sup> <a name="MinimumOrigins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.minimumOrigins"></a>

```csharp
public double MinimumOrigins { get; }
```

- *Type:* double

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.monitor"></a>

```csharp
public string Monitor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.networks"></a>

```csharp
public string[] Networks { get; }
```

- *Type:* string[]

---

##### `NotificationEmail`<sup>Required</sup> <a name="NotificationEmail" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.notificationEmail"></a>

```csharp
public string NotificationEmail { get; }
```

- *Type:* string

---

##### `NotificationFilter`<sup>Required</sup> <a name="NotificationFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.notificationFilter"></a>

```csharp
public DataCloudflareLoadBalancerPoolNotificationFilterOutputReference NotificationFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterOutputReference</a>

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.origins"></a>

```csharp
public DataCloudflareLoadBalancerPoolOriginsList Origins { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList">DataCloudflareLoadBalancerPoolOriginsList</a>

---

##### `OriginSteering`<sup>Required</sup> <a name="OriginSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.originSteering"></a>

```csharp
public DataCloudflareLoadBalancerPoolOriginSteeringOutputReference OriginSteering { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference">DataCloudflareLoadBalancerPoolOriginSteeringOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.poolIdInput"></a>

```csharp
public string PoolIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancerPoolConfig <a name="DataCloudflareLoadBalancerPoolConfig" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    DataCloudflareLoadBalancerPoolFilter Filter = null,
    string PoolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter">DataCloudflareLoadBalancerPoolFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/load_balancer_pool#filter DataCloudflareLoadBalancerPool#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.poolId">PoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/load_balancer_pool#pool_id DataCloudflareLoadBalancerPool#pool_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/load_balancer_pool#account_id DataCloudflareLoadBalancerPool#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.filter"></a>

```csharp
public DataCloudflareLoadBalancerPoolFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter">DataCloudflareLoadBalancerPoolFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/load_balancer_pool#filter DataCloudflareLoadBalancerPool#filter}.

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolConfig.property.poolId"></a>

```csharp
public string PoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/load_balancer_pool#pool_id DataCloudflareLoadBalancerPool#pool_id}.

---

### DataCloudflareLoadBalancerPoolFilter <a name="DataCloudflareLoadBalancerPoolFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolFilter {
    string Monitor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter.property.monitor">Monitor</a></code> | <code>string</code> | The ID of the Monitor to use for checking the health of origins within this pool. |

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilter.property.monitor"></a>

```csharp
public string Monitor { get; set; }
```

- *Type:* string

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/load_balancer_pool#monitor DataCloudflareLoadBalancerPool#monitor}

---

### DataCloudflareLoadBalancerPoolLoadShedding <a name="DataCloudflareLoadBalancerPoolLoadShedding" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadShedding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolLoadShedding {

};
```


### DataCloudflareLoadBalancerPoolNotificationFilter <a name="DataCloudflareLoadBalancerPoolNotificationFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolNotificationFilter {

};
```


### DataCloudflareLoadBalancerPoolNotificationFilterOrigin <a name="DataCloudflareLoadBalancerPoolNotificationFilterOrigin" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolNotificationFilterOrigin {

};
```


### DataCloudflareLoadBalancerPoolNotificationFilterPool <a name="DataCloudflareLoadBalancerPoolNotificationFilterPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolNotificationFilterPool {

};
```


### DataCloudflareLoadBalancerPoolOrigins <a name="DataCloudflareLoadBalancerPoolOrigins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOrigins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolOrigins {

};
```


### DataCloudflareLoadBalancerPoolOriginsHeader <a name="DataCloudflareLoadBalancerPoolOriginsHeader" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolOriginsHeader {

};
```


### DataCloudflareLoadBalancerPoolOriginSteering <a name="DataCloudflareLoadBalancerPoolOriginSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolOriginSteering {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancerPoolFilterOutputReference <a name="DataCloudflareLoadBalancerPoolFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resetMonitor">ResetMonitor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.resetMonitor"></a>

```csharp
private void ResetMonitor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.monitorInput">MonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.monitor">Monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.monitorInput"></a>

```csharp
public string MonitorInput { get; }
```

- *Type:* string

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.monitor"></a>

```csharp
public string Monitor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataCloudflareLoadBalancerPoolLoadSheddingOutputReference <a name="DataCloudflareLoadBalancerPoolLoadSheddingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolLoadSheddingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent">DefaultPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy">DefaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent">SessionPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy">SessionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadShedding">DataCloudflareLoadBalancerPoolLoadShedding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPercent`<sup>Required</sup> <a name="DefaultPercent" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.defaultPercent"></a>

```csharp
public double DefaultPercent { get; }
```

- *Type:* double

---

##### `DefaultPolicy`<sup>Required</sup> <a name="DefaultPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.defaultPolicy"></a>

```csharp
public string DefaultPolicy { get; }
```

- *Type:* string

---

##### `SessionPercent`<sup>Required</sup> <a name="SessionPercent" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.sessionPercent"></a>

```csharp
public double SessionPercent { get; }
```

- *Type:* double

---

##### `SessionPolicy`<sup>Required</sup> <a name="SessionPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.sessionPolicy"></a>

```csharp
public string SessionPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadSheddingOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancerPoolLoadShedding InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolLoadShedding">DataCloudflareLoadBalancerPoolLoadShedding</a>

---


### DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference <a name="DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.disable">Disable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy">Healthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin">DataCloudflareLoadBalancerPoolNotificationFilterOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.disable"></a>

```csharp
public IResolvable Disable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.healthy"></a>

```csharp
public IResolvable Healthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancerPoolNotificationFilterOrigin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOrigin">DataCloudflareLoadBalancerPoolNotificationFilterOrigin</a>

---


### DataCloudflareLoadBalancerPoolNotificationFilterOutputReference <a name="DataCloudflareLoadBalancerPoolNotificationFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolNotificationFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.origin">Origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.pool">Pool</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilter">DataCloudflareLoadBalancerPoolNotificationFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.origin"></a>

```csharp
public DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference Origin { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterOriginOutputReference</a>

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.pool"></a>

```csharp
public DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference Pool { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference">DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancerPoolNotificationFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilter">DataCloudflareLoadBalancerPoolNotificationFilter</a>

---


### DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference <a name="DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.disable">Disable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy">Healthy</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPool">DataCloudflareLoadBalancerPoolNotificationFilterPool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.disable"></a>

```csharp
public IResolvable Disable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.healthy"></a>

```csharp
public IResolvable Healthy { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPoolOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancerPoolNotificationFilterPool InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolNotificationFilterPool">DataCloudflareLoadBalancerPoolNotificationFilterPool</a>

---


### DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference <a name="DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.host">Host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeader">DataCloudflareLoadBalancerPoolOriginsHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.host"></a>

```csharp
public string[] Host { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancerPoolOriginsHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeader">DataCloudflareLoadBalancerPoolOriginsHeader</a>

---


### DataCloudflareLoadBalancerPoolOriginsList <a name="DataCloudflareLoadBalancerPoolOriginsList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolOriginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.get"></a>

```csharp
private DataCloudflareLoadBalancerPoolOriginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareLoadBalancerPoolOriginsOutputReference <a name="DataCloudflareLoadBalancerPoolOriginsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolOriginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.disabledAt">DisabledAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference">DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOrigins">DataCloudflareLoadBalancerPoolOrigins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `DisabledAt`<sup>Required</sup> <a name="DisabledAt" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.disabledAt"></a>

```csharp
public string DisabledAt { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.header"></a>

```csharp
public DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference Header { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference">DataCloudflareLoadBalancerPoolOriginsHeaderOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancerPoolOrigins InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOrigins">DataCloudflareLoadBalancerPoolOrigins</a>

---


### DataCloudflareLoadBalancerPoolOriginSteeringOutputReference <a name="DataCloudflareLoadBalancerPoolOriginSteeringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareLoadBalancerPoolOriginSteeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteering">DataCloudflareLoadBalancerPoolOriginSteering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteeringOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareLoadBalancerPoolOriginSteering InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPool.DataCloudflareLoadBalancerPoolOriginSteering">DataCloudflareLoadBalancerPoolOriginSteering</a>

---



