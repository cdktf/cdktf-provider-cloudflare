# `dataCloudflareMagicNetworkMonitoringRules` Submodule <a name="`dataCloudflareMagicNetworkMonitoringRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicNetworkMonitoringRules <a name="DataCloudflareMagicNetworkMonitoringRules" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_network_monitoring_rules cloudflare_magic_network_monitoring_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules(scope: Construct, id: string, config: DataCloudflareMagicNetworkMonitoringRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig">DataCloudflareMagicNetworkMonitoringRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig">DataCloudflareMagicNetworkMonitoringRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isConstruct"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformElement"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformDataSource"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareMagicNetworkMonitoringRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicNetworkMonitoringRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicNetworkMonitoringRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_network_monitoring_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicNetworkMonitoringRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList">DataCloudflareMagicNetworkMonitoringRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.result"></a>

```typescript
public readonly result: DataCloudflareMagicNetworkMonitoringRulesResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList">DataCloudflareMagicNetworkMonitoringRulesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicNetworkMonitoringRulesConfig <a name="DataCloudflareMagicNetworkMonitoringRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicNetworkMonitoringRulesConfig: dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_network_monitoring_rules#account_id DataCloudflareMagicNetworkMonitoringRules#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_network_monitoring_rules#account_id DataCloudflareMagicNetworkMonitoringRules#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_network_monitoring_rules#max_items DataCloudflareMagicNetworkMonitoringRules#max_items}

---

### DataCloudflareMagicNetworkMonitoringRulesResult <a name="DataCloudflareMagicNetworkMonitoringRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicNetworkMonitoringRulesResult: dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicNetworkMonitoringRulesResultList <a name="DataCloudflareMagicNetworkMonitoringRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareMagicNetworkMonitoringRulesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareMagicNetworkMonitoringRulesResultOutputReference <a name="DataCloudflareMagicNetworkMonitoringRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicNetworkMonitoringRules } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.automaticAdvertisement">automaticAdvertisement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.bandwidthThreshold">bandwidthThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.packetThreshold">packetThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.prefixes">prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.zscoreSensitivity">zscoreSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.zscoreTarget">zscoreTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult">DataCloudflareMagicNetworkMonitoringRulesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticAdvertisement`<sup>Required</sup> <a name="automaticAdvertisement" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.automaticAdvertisement"></a>

```typescript
public readonly automaticAdvertisement: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bandwidthThreshold`<sup>Required</sup> <a name="bandwidthThreshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.bandwidthThreshold"></a>

```typescript
public readonly bandwidthThreshold: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packetThreshold`<sup>Required</sup> <a name="packetThreshold" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.packetThreshold"></a>

```typescript
public readonly packetThreshold: number;
```

- *Type:* number

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.prefixes"></a>

```typescript
public readonly prefixes: string[];
```

- *Type:* string[]

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zscoreSensitivity`<sup>Required</sup> <a name="zscoreSensitivity" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.zscoreSensitivity"></a>

```typescript
public readonly zscoreSensitivity: string;
```

- *Type:* string

---

##### `zscoreTarget`<sup>Required</sup> <a name="zscoreTarget" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.zscoreTarget"></a>

```typescript
public readonly zscoreTarget: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicNetworkMonitoringRulesResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicNetworkMonitoringRules.DataCloudflareMagicNetworkMonitoringRulesResult">DataCloudflareMagicNetworkMonitoringRulesResult</a>

---



