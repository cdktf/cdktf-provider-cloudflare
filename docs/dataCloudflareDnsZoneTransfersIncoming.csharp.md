# `dataCloudflareDnsZoneTransfersIncoming` Submodule <a name="`dataCloudflareDnsZoneTransfersIncoming` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsZoneTransfersIncoming <a name="DataCloudflareDnsZoneTransfersIncoming" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_zone_transfers_incoming cloudflare_dns_zone_transfers_incoming}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsZoneTransfersIncoming(Construct Scope, string Id, DataCloudflareDnsZoneTransfersIncomingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig">DataCloudflareDnsZoneTransfersIncomingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig">DataCloudflareDnsZoneTransfersIncomingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersIncoming.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersIncoming.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersIncoming.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareDnsZoneTransfersIncoming.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareDnsZoneTransfersIncoming resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsZoneTransfersIncoming to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsZoneTransfersIncoming that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_zone_transfers_incoming#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsZoneTransfersIncoming to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.autoRefreshSeconds">AutoRefreshSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.checkedTime">CheckedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.modifiedTime">ModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.peers">Peers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.soaSerial">SoaSerial</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutoRefreshSeconds`<sup>Required</sup> <a name="AutoRefreshSeconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.autoRefreshSeconds"></a>

```csharp
public double AutoRefreshSeconds { get; }
```

- *Type:* double

---

##### `CheckedTime`<sup>Required</sup> <a name="CheckedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.checkedTime"></a>

```csharp
public string CheckedTime { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedTime`<sup>Required</sup> <a name="ModifiedTime" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.modifiedTime"></a>

```csharp
public string ModifiedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.peers"></a>

```csharp
public string[] Peers { get; }
```

- *Type:* string[]

---

##### `SoaSerial`<sup>Required</sup> <a name="SoaSerial" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.soaSerial"></a>

```csharp
public double SoaSerial { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncoming.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsZoneTransfersIncomingConfig <a name="DataCloudflareDnsZoneTransfersIncomingConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareDnsZoneTransfersIncomingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_zone_transfers_incoming#zone_id DataCloudflareDnsZoneTransfersIncoming#zone_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsZoneTransfersIncoming.DataCloudflareDnsZoneTransfersIncomingConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/dns_zone_transfers_incoming#zone_id DataCloudflareDnsZoneTransfersIncoming#zone_id}.

---



