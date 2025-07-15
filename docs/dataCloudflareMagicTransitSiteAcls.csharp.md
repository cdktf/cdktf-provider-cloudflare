# `dataCloudflareMagicTransitSiteAcls` Submodule <a name="`dataCloudflareMagicTransitSiteAcls` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteAcls <a name="DataCloudflareMagicTransitSiteAcls" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acls cloudflare_magic_transit_site_acls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAcls(Construct Scope, string Id, DataCloudflareMagicTransitSiteAclsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig">DataCloudflareMagicTransitSiteAclsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig">DataCloudflareMagicTransitSiteAclsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteAcls.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteAcls.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteAcls.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteAcls.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcls resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcls to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicTransitSiteAcls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acls#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList">DataCloudflareMagicTransitSiteAclsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.siteIdInput">SiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.result"></a>

```csharp
public DataCloudflareMagicTransitSiteAclsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList">DataCloudflareMagicTransitSiteAclsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.siteIdInput"></a>

```csharp
public string SiteIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteAclsConfig <a name="DataCloudflareMagicTransitSiteAclsConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string SiteId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.siteId">SiteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acls#account_id DataCloudflareMagicTransitSiteAcls#account_id}

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.siteId"></a>

```csharp
public string SiteId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acls#site_id DataCloudflareMagicTransitSiteAcls#site_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acls#max_items DataCloudflareMagicTransitSiteAcls#max_items}

---

### DataCloudflareMagicTransitSiteAclsResult <a name="DataCloudflareMagicTransitSiteAclsResult" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclsResult {

};
```


### DataCloudflareMagicTransitSiteAclsResultLan1 <a name="DataCloudflareMagicTransitSiteAclsResultLan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclsResultLan1 {

};
```


### DataCloudflareMagicTransitSiteAclsResultLan2 <a name="DataCloudflareMagicTransitSiteAclsResultLan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclsResultLan2 {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteAclsResultLan1OutputReference <a name="DataCloudflareMagicTransitSiteAclsResultLan1OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclsResultLan1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.lanId">LanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.lanName">LanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.portRanges">PortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1">DataCloudflareMagicTransitSiteAclsResultLan1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.lanId"></a>

```csharp
public string LanId { get; }
```

- *Type:* string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.lanName"></a>

```csharp
public string LanName { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.portRanges"></a>

```csharp
public string[] PortRanges { get; }
```

- *Type:* string[]

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteAclsResultLan1 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1">DataCloudflareMagicTransitSiteAclsResultLan1</a>

---


### DataCloudflareMagicTransitSiteAclsResultLan2OutputReference <a name="DataCloudflareMagicTransitSiteAclsResultLan2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclsResultLan2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.lanId">LanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.lanName">LanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.portRanges">PortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2">DataCloudflareMagicTransitSiteAclsResultLan2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.lanId"></a>

```csharp
public string LanId { get; }
```

- *Type:* string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.lanName"></a>

```csharp
public string LanName { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.portRanges"></a>

```csharp
public string[] PortRanges { get; }
```

- *Type:* string[]

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteAclsResultLan2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2">DataCloudflareMagicTransitSiteAclsResultLan2</a>

---


### DataCloudflareMagicTransitSiteAclsResultList <a name="DataCloudflareMagicTransitSiteAclsResultList" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.get"></a>

```csharp
private DataCloudflareMagicTransitSiteAclsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareMagicTransitSiteAclsResultOutputReference <a name="DataCloudflareMagicTransitSiteAclsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.forwardLocally">ForwardLocally</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.lan1">Lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference">DataCloudflareMagicTransitSiteAclsResultLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.lan2">Lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference">DataCloudflareMagicTransitSiteAclsResultLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.unidirectional">Unidirectional</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResult">DataCloudflareMagicTransitSiteAclsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForwardLocally`<sup>Required</sup> <a name="ForwardLocally" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.forwardLocally"></a>

```csharp
public IResolvable ForwardLocally { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Lan1`<sup>Required</sup> <a name="Lan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.lan1"></a>

```csharp
public DataCloudflareMagicTransitSiteAclsResultLan1OutputReference Lan1 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference">DataCloudflareMagicTransitSiteAclsResultLan1OutputReference</a>

---

##### `Lan2`<sup>Required</sup> <a name="Lan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.lan2"></a>

```csharp
public DataCloudflareMagicTransitSiteAclsResultLan2OutputReference Lan2 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference">DataCloudflareMagicTransitSiteAclsResultLan2OutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `Unidirectional`<sup>Required</sup> <a name="Unidirectional" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.unidirectional"></a>

```csharp
public IResolvable Unidirectional { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteAclsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResult">DataCloudflareMagicTransitSiteAclsResult</a>

---



