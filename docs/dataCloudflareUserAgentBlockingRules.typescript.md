# `dataCloudflareUserAgentBlockingRules` Submodule <a name="`dataCloudflareUserAgentBlockingRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareUserAgentBlockingRules <a name="DataCloudflareUserAgentBlockingRules" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/user_agent_blocking_rules cloudflare_user_agent_blocking_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

new dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules(scope: Construct, id: string, config: DataCloudflareUserAgentBlockingRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig">DataCloudflareUserAgentBlockingRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig">DataCloudflareUserAgentBlockingRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetUserAgent">resetUserAgent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetUserAgent` <a name="resetUserAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.resetUserAgent"></a>

```typescript
public resetUserAgent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isConstruct"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformElement"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformDataSource"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareUserAgentBlockingRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareUserAgentBlockingRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareUserAgentBlockingRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/user_agent_blocking_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareUserAgentBlockingRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList">DataCloudflareUserAgentBlockingRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.userAgentInput">userAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.userAgent">userAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.result"></a>

```typescript
public readonly result: DataCloudflareUserAgentBlockingRulesResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList">DataCloudflareUserAgentBlockingRulesResultList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userAgentInput`<sup>Optional</sup> <a name="userAgentInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.userAgentInput"></a>

```typescript
public readonly userAgentInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userAgent`<sup>Required</sup> <a name="userAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.userAgent"></a>

```typescript
public readonly userAgent: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareUserAgentBlockingRulesConfig <a name="DataCloudflareUserAgentBlockingRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

const dataCloudflareUserAgentBlockingRulesConfig: dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.description">description</a></code> | <code>string</code> | A string to search for in the description of existing rules. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, indicates that the rule is currently paused. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.userAgent">userAgent</a></code> | <code>string</code> | A string to search for in the user agent values of existing rules. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/user_agent_blocking_rules#zone_id DataCloudflareUserAgentBlockingRules#zone_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A string to search for in the description of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/user_agent_blocking_rules#description DataCloudflareUserAgentBlockingRules#description}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/user_agent_blocking_rules#max_items DataCloudflareUserAgentBlockingRules#max_items}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, indicates that the rule is currently paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/user_agent_blocking_rules#paused DataCloudflareUserAgentBlockingRules#paused}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesConfig.property.userAgent"></a>

```typescript
public readonly userAgent: string;
```

- *Type:* string

A string to search for in the user agent values of existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/user_agent_blocking_rules#user_agent DataCloudflareUserAgentBlockingRules#user_agent}

---

### DataCloudflareUserAgentBlockingRulesResult <a name="DataCloudflareUserAgentBlockingRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

const dataCloudflareUserAgentBlockingRulesResult: dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult = { ... }
```


### DataCloudflareUserAgentBlockingRulesResultConfiguration <a name="DataCloudflareUserAgentBlockingRulesResultConfiguration" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

const dataCloudflareUserAgentBlockingRulesResultConfiguration: dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference <a name="DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

new dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration">DataCloudflareUserAgentBlockingRulesResultConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareUserAgentBlockingRulesResultConfiguration;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfiguration">DataCloudflareUserAgentBlockingRulesResultConfiguration</a>

---


### DataCloudflareUserAgentBlockingRulesResultList <a name="DataCloudflareUserAgentBlockingRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

new dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareUserAgentBlockingRulesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareUserAgentBlockingRulesResultOutputReference <a name="DataCloudflareUserAgentBlockingRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareUserAgentBlockingRules } from '@cdktf/provider-cloudflare'

new dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference">DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult">DataCloudflareUserAgentBlockingRulesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.configuration"></a>

```typescript
public readonly configuration: DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference">DataCloudflareUserAgentBlockingRulesResultConfigurationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.paused"></a>

```typescript
public readonly paused: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareUserAgentBlockingRulesResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareUserAgentBlockingRules.DataCloudflareUserAgentBlockingRulesResult">DataCloudflareUserAgentBlockingRulesResult</a>

---



